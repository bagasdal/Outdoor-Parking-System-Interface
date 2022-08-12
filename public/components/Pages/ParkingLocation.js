import React, { Component } from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import "../../map.css";
import fire from '../../fire';
import { Link } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3BhcmtzeXMiLCJhIjoiY2tkMTcxdnY1MDV0MjMzbnk5ZzMzNWxxMCJ9.dMYVJcy69lY_09vD1wShhQ';
{/* <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.min.js'></script>; */}

class ParkingLocation extends Component {
    constructor(props) {
        super();
        this.labtek8_1 = fire.database().ref('free_space/Labtek_7_8/cam_1').child('free');
        this.labtek8_2 = fire.database().ref('free_space/Labtek_7_8/cam_2').child('free');
        this.labtek5_1 = fire.database().ref('free_space/Labtek_5_6/cam_1').child('free');
        this.labtek5_2 = fire.database().ref('free_space/Labtek_5_6/cam_2').child('free');
        this.pln_1 = fire.database().ref('free_space/PLN/cam_1').child('free');
        this.pln_2 = fire.database().ref('free_space/PLN/cam_2').child('free');

        this.state = {
          lng: 107.610657,
          lat: -6.891480,
          zoom: 15,
          Avail_Labtek8_cam1 :"",
          Avail_Labtek8_cam2 :"",
          Avail_Labtek5_cam1 :"",
          Avail_Labtek5_cam2 :"",
          Avail_PLN_cam1 : "",
          Avail_PLN_cam2 : "",
        };
    }

    updateData(){
      this.labtek8_1.on('value', snap => {
          this.setState({
          Avail_Labtek8_cam1: snap.val(),
          });
      });
      this.labtek8_2.on('value', snap => {
          this.setState({
          Avail_Labtek8_cam2: snap.val(),
          });
      });
      this.labtek5_1.on('value', snap => {
          this.setState({
          Avail_Labtek5_cam1: snap.val(),
          });
      });
      this.labtek5_2.on('value', snap => {
          this.setState({
          Avail_Labtek5_cam2: snap.val(),
          });
      });
      this.pln_1.on('value', snap => {
          this.setState({
          Avail_PLN_cam1: snap.val(),
          });
      });
      this.pln_2.on('value', snap => {
          this.setState({
          Avail_PLN_cam2: snap.val(),
          });
      });
    }

    componentDidMount() {

      this.updateData();
        
      var map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [107.610657, -6.891480],
        zoom: this.state.zoom
      });

      const distance = require('@turf/distance').default;

      var park = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                107.610621,
                -6.890894
              ]
            },
            "properties": {
              "address": "Parkir Labtek VIII",
              "slot": this.state.Avail_Labtek8_cam1 + this.state.Avail_Labtek8_cam2,
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                107.609865,
                -6.890883
              ]
            },
            "properties": {
              "address": "Parkir Labtek V",
              "slot": "30",
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                107.610853,
                -6.889717
              ]
            },
            "properties": {
              "address": "Parkir PLN",
              "slot": "20",
            }
          }]
      };

      function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        var popup = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h3>'+ currentFeature.properties.address +'</h3>' +
            '<h4>' + currentFeature.properties.slot + '</h4>')
          .addTo(map);
      };

      function flyToStore(currentFeature) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
          });
      };

      function getBbox(sortedStores, storeIdentifier, searchResult) {
        var lats = [sortedStores.features[storeIdentifier].geometry.coordinates[1], searchResult.coordinates[1]]
        var lons = [sortedStores.features[storeIdentifier].geometry.coordinates[0], searchResult.coordinates[0]]
        var sortedLons = lons.sort(function(a,b){
            if (a > b) { return 1; }
            if (a.distance < b.distance) { return -1; }
            return 0;
          });
        var sortedLats = lats.sort(function(a,b){
            if (a > b) { return 1; }
            if (a.distance < b.distance) { return -1; }
            return 0;
          });
        return [
          [sortedLons[0], sortedLats[0]],
          [sortedLons[1], sortedLats[1]]
        ];
      };

      var canvas = map.getCanvasContainer();
      
      var start = [107.610428, -6.892821];

      map.on('move', () => {
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });

      function getRoute(end) {
          // make a directions request using cycling profile
          // an arbitrary start will always be the same
          // only the end or destination will change
          var start = [107.610428, -6.892821];
          var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
        
          // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
          var req = new XMLHttpRequest();
          req.open('GET', url, true);
          req.onload = function() {
            var json = JSON.parse(req.response);
            var data = json.routes[0];
            var route = data.geometry.coordinates;
            var geojson = {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: route
              }
            };
            // if the route already exists on the map, reset it using setData
            if (map.getSource('route')) {
              map.getSource('route').setData(geojson);
            } else { // otherwise, make a new request
              map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                  type: 'geojson',
                  data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'LineString',
                      coordinates: geojson
                    }
                  }
                },
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round'
                },
                paint: {
                  'line-color': '#3887be',
                  'line-width': 5,
                  'line-opacity': 0.75
                }
              });
            }
            // add turn instructions here at the end
          };
          req.send();
      }

      map.on('load', function() {

        var geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          marker: true,
          placeholder: "Insert your destination"
        });

        map.addSource("places", {
          "type": "geojson",
          "data": park
        });

        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions:{
                enableHighAccuracy:true
            },
            trackUserLocation:true
        }));
        // map.addControl(geocoder, 'top-left');

        park.features.forEach(function(marker){
          var el = document.createElement('div');
          el.id = "marker-"+ marker.properties.id
          el.className = 'marker';

          new mapboxgl.Marker(el, {offset: [0, -23]})
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
        });

        geocoder.on('result', function(ev) {

          /* Get the coordinate of the search result */
          var searchResult = ev.result.geometry;

          /**
           * Calculate distances:
           * For each store, use turf.disance to calculate the distance
           * in miles between the searchResult and the store. Assign the
           * calculated value to a property called `distance`.
          */
          var options = { units: 'miles' };
          park.features.forEach(function(park){
            Object.defineProperty(park.properties, 'distance', {
              value: distance(searchResult, park.geometry, options),
              writable: true,
              enumerable: true,
              configurable: true
            });
          });

          /**
           * Sort stores by distance from closest to the `searchResult`
           * to furthest.
          */
          park.features.sort(function(a,b){
            if (a.properties.distance > b.properties.distance) {
              return 1;
            }
            if (a.properties.distance < b.properties.distance) {
              return -1;
            }
            return 0;
          });

          createPopUp(park.features[0]);

          var bbox = getBbox(park, 0, searchResult);
          map.fitBounds(bbox, {
            padding: 100
          });
        });

        map.addLayer({
          id: 'park',
          type: 'circle',
          source: {
            data: park,
            type: 'geojson'
          },
          paint: {
            'circle-radius': 20,
            'circle-color': 'white',
            'circle-stroke-color': '#3887be',
            'circle-stroke-width': 3
          }
        });

        map.addLayer({
          id: 'park-symbol',
          type: 'symbol',
          source: {
            data: park,
            type: 'geojson'
          },
          layout: {
            'icon-image': 'parking-15',
            'icon-size': 1
          },
          paint: {
            'text-color': '#3887be'
          }
        });

        // make an initial directions request that
        // starts and ends at the same location
        // getRoute(start);
      
        // Add starting point to the map
        map.addLayer({
          id: 'point',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [{
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: start
                }
              }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#3887be'
          }
        });
      });

      map.on('click', 'park', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = ('<h3>'+e.features[0].properties.address+'</h3>' + '<center>' +
        '<h4>' + e.features[0].properties.slot + '</h4>' + '</center>');

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
    
        map.flyTo({
          center: coordinates,
          zoom: 18
        });

        // var bbox = getBbox(park, 0, searchResult);
        // map.fitBounds(bbox, {
        //   padding: 100
        // });
          
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);

        var end = {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coordinates
            }
          }
          ]
        };
        if (map.getLayer('end')) {
          map.getSource('end').setData(end);
        };
        // getRoute(coordinates);
      });

      map.on('mouseenter', 'park', function () {
        map.getCanvas().style.cursor = 'pointer';
        });
          
        // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'park', function () {
        map.getCanvas().style.cursor = '';
      });
    }
    
    render() {
        return (
            <React.Fragment>
                <HeaderDetails className="container-fluid align-items-center">
                  <h2 className="display-2 font-weight-bold">Parking Locations
                  </h2>
                    {/* <div className='sidebarStyle'>
                        <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                        </div>
                    </div> */}
                    <div className='container'>
                    <div className='row mt-5'>
                      {/* <InfoConsumer>
                        {value => {
                            return value.info.map(item => {
                                return <Info key={item.id} item={item} />;
                            })
                        }}
                        </InfoConsumer>  */}
                        <div className="col-10 col-lg-4 mx-auto mb-5">
                            <div className="card" stylle={{ width: '18rem' }}>
                                <img src='../../images/labtek-VIII.jpg' className="card-img-top"/>
                                <div className="card-body">
                                    <h3 className="card-title text-uppercase">Labtek VIII</h3>
                                    <h5 className="card-title">Available space {this.state.Avail_Labtek8_cam1 + this.state.Avail_Labtek8_cam2}</h5>
                                    <p className="card-text">Tempat parkir Labtek VIII terletak di sebelah selatan gedung Achmad Bakrie (Labtek VIII) dengan kapasitas maksimal 38 mobil</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-lg-4 mx-auto mb-5">
                            <div className="card" stylle={{ width: '18rem' }}>
                                <img src='../../images/labtek-V.jpg' className="card-img-top"/>
                                <div className="card-body">
                                    <h3 className="card-title text-uppercase">Labtek V Park</h3>
                                    <h5 className="card-title">Available space {this.state.Avail_Labtek5_cam1 + this.state.Avail_Labtek5_cam2}</h5>
                                    <p className="card-text">Tempat parkir Labtek VIII terletak di sebelah selatan gedung Achmad Bakrie (Labtek VIII) dengan kapasitas maksimal 46 mobil</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-lg-4 mx-auto mb-5">
                            <div className="card" stylle={{ width: '18rem' }}>
                                <img src='../../images/pln-ITB.jpg' className="card-img-top"/>
                                <div className="card-body">
                                    <h3 className="card-title text-uppercase">PLN Park</h3>
                                    <h5 className="card-title">Available space {this.state.Avail_PLN_cam1 + this.state.Avail_PLN_cam2}</h5>
                                    <p className="card-text">Tempat parkir Labtek VIII terletak di sebelah selatan gedung Achmad Bakrie (Labtek VIII) dengan kapasitas maksimal 37 mobil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div ref={el => this.mapContainer = el} className='mapContainer' />
                </HeaderDetails>
            </React.Fragment>
            
        )
    }
}

export default ParkingLocation;

const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;

h1 {
    padding-top: 5%;
    color: var(--mainDark);
}

h3 {
  color: var(--mainDark);
}

h5 {
  color: var(--mainDark);
}

h4 {
    color: var(--mainDark);
}

p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
}

i {
    font-size: 1.875rem;
    color: var(--mainDark);
}

i:hover {
    color: var(--mainBlue);
    cursor: pointer;
}

.nav-item {
    height: 18.75rem;
}

@media (max-widht: 760px) {
    h1,
    h4{
        color: var(--mainWhite);
    }
}

`;