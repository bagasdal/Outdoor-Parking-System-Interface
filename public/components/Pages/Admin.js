import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';
import fire from '../../fire';
import { Link } from 'react-router-dom';

class Admin extends Component {

    constructor(){
        super();
        this.labtek8_1 = fire.database().ref('free_space/Labtek_7_8/cam_1').child('free');
        this.labtek8_2 = fire.database().ref('free_space/Labtek_7_8/cam_2').child('free');
        this.labtek5_1 = fire.database().ref('free_space/Labtek_5_6/cam_1').child('free');
        this.labtek5_2 = fire.database().ref('free_space/Labtek_5_6/cam_2').child('free');
        this.pln_1 = fire.database().ref('free_space/PLN/cam_1').child('free');
        this.pln_2 = fire.database().ref('free_space/PLN/cam_2').child('free');
        this.state = {
            Avail_labtek8_cam1 :"",
            Avail_labtek8_cam2 :"",
            Avail_Labtek5_cam1 :"",
            Avail_Labtek5_cam2 :"",
            Avail_PLN_cam1 : "",
            Avail_PLN_cam2 : "",
        }
    }

    updateData(){
        this.labtek8_1.on('value', snap => {
            this.setState({
            Avail_labtek8_cam1: snap.val(),
            });
        });
        this.labtek8_2.on('value', snap => {
            this.setState({
            Avail_labtek8_cam2: snap.val(),
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

    componentDidMount(){
        this.updateData();
    }

    render() {
        return (

            <div className='container'>
            <div className='row mt-5'>
                <div className="col-10 col-lg-4 mx-auto mb-5">
                    <div className="card" stylle={{ width: '18rem' }}>
                        <img src='../../images/labtek-VIII.jpg' className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-uppercase">Labtek VIII Park</h3>
                            <h5 className="card-title">Available space {this.state.Avail_labtek8_cam1 + this.state.Avail_labtek8_cam2}</h5>
                            <p className="card-text">Tempat parkir Labtek VIII terletak di 
                            sebelah selatan gedung Achmad Bakrie (Labtek VIII) dengan kapasitas maksimal 38 mobil</p>
                            <Link
                            to='/LabtekVIII'
                            className="btn btn-outline-primary text-uppercase"
                            >
                            More Info
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-4 mx-auto mb-5">
                    <div className="card" stylle={{ width: '18rem' }}>
                        <img src='../../images/labtek-V.jpg' className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-uppercase">Labtek V Park</h3>
                            <h5 className="card-title">Available space {this.state.Avail_Labtek5_cam1 + this.state.Avail_Labtek5_cam2}</h5>
                            <p className="card-text">Tempat parkir Labtek VIII terletak di 
                            sebelah selatan gedung Achmad Bakrie (Labtek VIII) dengan kapasitas maksimal 46 mobil</p>
                            <Link
                            to='/LabtekV'
                            className="btn btn-outline-primary text-uppercase"
                            >
                            More Info
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-4 mx-auto mb-5">
                    <div className="card" stylle={{ width: '18rem' }}>
                        <img src='../../images/pln-ITB.jpg' className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-uppercase">PLN Park</h3>
                            <h5 className="card-title">Available space {this.state.Avail_PLN_cam1 + this.state.Avail_PLN_cam2}</h5>
                            <p className="card-text">Tempat parkir Labtek VIII terletak di 
                            sebelah selatan gedung Achmad Bakrie (Labtek VIII) dengan kapasitas maksimal 37 mobil</p>
                            <Link
                            to='/PLN'
                            className="btn btn-outline-primary text-uppercase"
                            >
                            More Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin;