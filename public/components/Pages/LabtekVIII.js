import React, { Component } from 'react';
import{ InfoConsumer } from '../context';
import styled from 'styled-components';
import fire from '../../fire';

class LabtekVIII extends Component {

    constructor(){
        super();
  
        this.labtek8_1_status = fire.database().ref('free_space/Labtek_7_8/cam_1').child('status');
        this.labtek8_2_status = fire.database().ref('free_space/Labtek_7_8/cam_2').child('status');
        this.labtek8_1_slot_01 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_01').child('free');
        this.labtek8_1_slot_02 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_02').child('free');
        this.labtek8_1_slot_03 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_03').child('free');
        this.labtek8_1_slot_04 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_04').child('free');
        this.labtek8_1_slot_05 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_05').child('free');
        this.labtek8_1_slot_06 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_06').child('free');
        this.labtek8_1_slot_07 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_07').child('free');
        this.labtek8_1_slot_08 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_08').child('free');
        this.labtek8_1_slot_09 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_09').child('free');
        this.labtek8_1_slot_10 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_10').child('free');
        this.labtek8_1_slot_11 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_11').child('free');
        this.labtek8_1_slot_12 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_12').child('free');
        this.labtek8_1_slot_13 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_13').child('free');
        this.labtek8_1_slot_14 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_14').child('free');
        this.labtek8_1_slot_15 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_15').child('free');
        this.labtek8_1_slot_16 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_16').child('free');
        this.labtek8_1_slot_17 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_17').child('free');
        this.labtek8_1_slot_18 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_18').child('free');
        this.labtek8_1_slot_19 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_19').child('free');
        this.labtek8_1_slot_20 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_20').child('free');
        this.labtek8_1_slot_21 = fire.database().ref('free_space/Labtek_7_8/cam_1/slot/id_21').child('free');
        this.labtek8_2_slot_01 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_01').child('free');
        this.labtek8_2_slot_02 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_02').child('free');
        this.labtek8_2_slot_03 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_03').child('free');
        this.labtek8_2_slot_04 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_04').child('free');
        this.labtek8_2_slot_05 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_05').child('free');
        this.labtek8_2_slot_06 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_06').child('free');
        this.labtek8_2_slot_07 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_07').child('free');
        this.labtek8_2_slot_08 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_08').child('free');
        this.labtek8_2_slot_09 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_09').child('free');
        this.labtek8_2_slot_10 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_10').child('free');
        this.labtek8_2_slot_11 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_11').child('free');
        this.labtek8_2_slot_12 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_12').child('free');
        this.labtek8_2_slot_13 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_13').child('free');
        this.labtek8_2_slot_14 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_14').child('free');
        this.labtek8_2_slot_15 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_15').child('free');
        this.labtek8_2_slot_16 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_16').child('free');
        this.labtek8_2_slot_17 = fire.database().ref('free_space/Labtek_7_8/cam_2/slot/id_17').child('free');
        this.labtek8_1_Config = fire.database().ref('system_config').child('cam_timeout');
  
        this.state={
            Labtek8_cam1_on : "",
            Labtek8_cam2_on : "",
            Labtek8_1_01 :"",
            Labtek8_1_02 :"",
            Labtek8_1_03 :"",
            Labtek8_1_04 :"",
            Labtek8_1_05 :"",
            Labtek8_1_06 :"",
            Labtek8_1_07 :"",
            Labtek8_1_08 :"",
            Labtek8_1_09 :"",
            Labtek8_1_10 :"",
            Labtek8_1_11 :"",
            Labtek8_1_12 :"",
            Labtek8_1_13 :"",
            Labtek8_1_14 :"",
            Labtek8_1_15 :"",
            Labtek8_1_16 :"",
            Labtek8_1_17 :"",
            Labtek8_1_18 :"",
            Labtek8_1_19 :"",
            Labtek8_1_20 :"",
            Labtek8_1_21 :"",
            Labtek8_2_01 :"",
            Labtek8_2_02 :"",
            Labtek8_2_03 :"",
            Labtek8_2_04 :"",
            Labtek8_2_05 :"",
            Labtek8_2_06 :"",
            Labtek8_2_07 :"",
            Labtek8_2_08 :"",
            Labtek8_2_09 :"",
            Labtek8_2_10 :"",
            Labtek8_2_11 :"",
            Labtek8_2_12 :"",
            Labtek8_2_13 :"",
            Labtek8_2_14 :"",
            Labtek8_2_15 :"",
            Labtek8_2_16 :"",
            Labtek8_2_17 :"",
        };
    }
    updateData(){
        this.labtek8_1_status.on('value', snap => {
          this.setState({
          Labtek8_cam1_on: snap.val(),
          });
        });
        this.labtek8_2_status.on('value', snap => {
            this.setState({
            Labtek8_cam2_on: snap.val(),
            });
        });
        this.labtek8_1_slot_01.on('value', snap => {
            this.setState({
            Labtek8_1_01: snap.val(),
            });
        });
        this.labtek8_1_slot_02.on('value', snap => {
            this.setState({
            Labtek8_1_02: snap.val(),
            });
        });
        this.labtek8_1_slot_03.on('value', snap => {
            this.setState({
            Labtek8_1_03: snap.val(),
            });
        });
        this.labtek8_1_slot_04.on('value', snap => {
            this.setState({
            Labtek8_1_04: snap.val(),
            });
        });
        this.labtek8_1_slot_05.on('value', snap => {
            this.setState({
            Labtek8_1_05: snap.val(),
            });
        });
        this.labtek8_1_slot_06.on('value', snap => {
            this.setState({
            Labtek8_1_06: snap.val(),
            });
        });
        this.labtek8_1_slot_07.on('value', snap => {
            this.setState({
            Labtek8_1_07: snap.val(),
            });
        });
        this.labtek8_1_slot_08.on('value', snap => {
            this.setState({
            Labtek8_1_08: snap.val(),
            });
        });
        this.labtek8_1_slot_09.on('value', snap => {
            this.setState({
            Labtek8_1_09: snap.val(),
            });
        });
        this.labtek8_1_slot_10.on('value', snap => {
            this.setState({
            Labtek8_1_10: snap.val(),
            });
        });
        this.labtek8_1_slot_11.on('value', snap => {
            this.setState({
            Labtek8_1_11: snap.val(),
            });
        });
        this.labtek8_1_slot_12.on('value', snap => {
            this.setState({
            Labtek8_1_12: snap.val(),
            });
        });
        this.labtek8_1_slot_13.on('value', snap => {
            this.setState({
            Labtek8_1_13: snap.val(),
            });
        });
        this.labtek8_1_slot_14.on('value', snap => {
            this.setState({
            Labtek8_1_14: snap.val(),
            });
        });
        this.labtek8_1_slot_15.on('value', snap => {
            this.setState({
            Labtek8_1_15: snap.val(),
            });
        });
        this.labtek8_1_slot_16.on('value', snap => {
            this.setState({
            Labtek8_1_16: snap.val(),
            });
        });
        this.labtek8_1_slot_17.on('value', snap => {
            this.setState({
            Labtek8_1_17: snap.val(),
            });
        });
        this.labtek8_1_slot_18.on('value', snap => {
            this.setState({
            Labtek8_1_18: snap.val(),
            });
        });
        this.labtek8_1_slot_19.on('value', snap => {
            this.setState({
            Labtek8_1_19: snap.val(),
            });
        });
        this.labtek8_1_slot_20.on('value', snap => {
            this.setState({
            Labtek8_1_20: snap.val(),
            });
        });
        this.labtek8_1_slot_21.on('value', snap => {
            this.setState({
            Labtek8_1_21: snap.val(),
            });
        });
        this.labtek8_2_slot_01.on('value', snap => {
            this.setState({
            Labtek8_2_01: snap.val(),
            });
        });
        this.labtek8_2_slot_02.on('value', snap => {
            this.setState({
            Labtek8_2_02: snap.val(),
            });
        });
        this.labtek8_2_slot_03.on('value', snap => {
            this.setState({
            Labtek8_2_03: snap.val(),
            });
        });
        this.labtek8_2_slot_04.on('value', snap => {
            this.setState({
            Labtek8_2_04: snap.val(),
            });
        });
        this.labtek8_2_slot_05.on('value', snap => {
            this.setState({
            Labtek8_2_05: snap.val(),
            });
        });
        this.labtek8_2_slot_06.on('value', snap => {
            this.setState({
            Labtek8_2_06: snap.val(),
            });
        });
        this.labtek8_2_slot_07.on('value', snap => {
            this.setState({
            Labtek8_2_07: snap.val(),
            });
        });
        this.labtek8_2_slot_08.on('value', snap => {
            this.setState({
            Labtek8_2_08: snap.val(),
            });
        });
        this.labtek8_2_slot_09.on('value', snap => {
            this.setState({
            Labtek8_2_09: snap.val(),
            });
        });
        this.labtek8_2_slot_10.on('value', snap => {
            this.setState({
            Labtek8_2_10: snap.val(),
            });
        });
        this.labtek8_2_slot_11.on('value', snap => {
            this.setState({
            Labtek8_2_11: snap.val(),
            });
        });
        this.labtek8_2_slot_12.on('value', snap => {
            this.setState({
            Labtek8_2_12: snap.val(),
            });
        });
        this.labtek8_2_slot_13.on('value', snap => {
            this.setState({
            Labtek8_2_13: snap.val(),
            });
        });
        this.labtek8_2_slot_14.on('value', snap => {
            this.setState({
            Labtek8_2_14: snap.val(),
            });
        });
        this.labtek8_2_slot_15.on('value', snap => {
            this.setState({
            Labtek8_2_15: snap.val(),
            });
        });
        this.labtek8_2_slot_16.on('value', snap => {
            this.setState({
            Labtek8_2_16: snap.val(),
            });
        });
        this.labtek8_2_slot_17.on('value', snap => {
            this.setState({
            Labtek8_2_17: snap.val(),
            });
        });
    }

    handleText=e=>{
        this.setState({
            Cam_Timeout : e.target.value
        })
    }

    handleSubmit=e=>{
        var cam_timeout = document.getElementById('CamTimeout')
        var end_time = document.getElementById('EndTime');
        var start_time = document.getElementById('StartTime');
        var threshold = document.getElementById('Threshold');
        var update_rate = document.getElementById('UpdateRate');
        var newData = {
            cam_timeout: parseFloat(cam_timeout.value),
            end_time: parseFloat(end_time.value),
            start_time: parseFloat(start_time.value),
            threshold: parseFloat(threshold.value),
            update_rate: parseFloat(update_rate.value)
        };
        // var newPostKey = fire.database().ref().child('system_config').push().key();
        var updates = {};
        updates['/system_config/'] = newData;
        fire.database().ref().update(updates);
    }

    handleSubmitURL1=e=>{
        var URL = document.getElementById('URL1');
        var newData = {
            url: URL.value
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_1/').update(newData);
    }

    handleSubmitURL2=e=>{
        var URL = document.getElementById('URL2');
        var newData = {
            url: URL.value
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_2/').update(newData);
    }

    handleSubmitMasking0=e=>{
        var slotId = document.getElementById('slotId');
        var mask00 = document.getElementById('Mask00');
        var mask01 = document.getElementById('Mask01');
        var newData = {
            0: parseFloat(mask00.value),
            1: parseFloat(mask01.value),
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_1/slot/' + slotId.value + '/masking/0/').update(newData);
    }

    handleSubmitMasking1=e=>{
        var slotId = document.getElementById('slotId');
        var mask10 = document.getElementById('Mask10');
        var mask11 = document.getElementById('Mask11');
        var newData = {
            0: parseFloat(mask10.value),
            1: parseFloat(mask11.value),
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_1/slot/' + slotId.value + '/masking/1/').update(newData);
    }

    handleSubmitReservasi=e=>{
        var slotId = document.getElementById('slotId');
        var newData = {
            reserved: true,
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_1/slot/' + slotId.value + '/').update(newData);
    }

    handleSubmitUnReservasi=e=>{
        var slotId = document.getElementById('slotId');
        var newData = {
            reserved: false,
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_1/slot/' + slotId.value + '/').update(newData);
    }

    handleSubmit2Masking0=e=>{
        var slotId = document.getElementById('slotId2');
        var mask00 = document.getElementById('2Mask00');
        var mask01 = document.getElementById('2Mask01');
        var newData = {
            0: parseFloat(mask00.value),
            1: parseFloat(mask01.value),
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_2/slot/' + slotId.value + '/masking/0/').update(newData);
    }

    handleSubmit2Masking1=e=>{
        var slotId = document.getElementById('slotId2');
        var mask10 = document.getElementById('2Mask10');
        var mask11 = document.getElementById('2Mask11');
        var newData = {
            0: parseFloat(mask10.value),
            1: parseFloat(mask11.value),
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_2/slot/' + slotId.value + '/masking/1/').update(newData);
    }

    handleSubmit2Reservasi=e=>{
        var slotId = document.getElementById('slotId2');
        var newData = {
            reserved: true,
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_2/slot/' + slotId.value + '/masking/').update(newData);
    }

    handleSubmit2UnReservasi=e=>{
        var slotId = document.getElementById('slotId2');
        var newData = {
            reserved: false,
        };
        fire.database().ref().child('/cam_config/Labtek_7_8/cam_2/slot/' + slotId.value + '/masking/').update(newData);
    }

    componentDidMount(){
        this.updateData();
    }

    render() {
        return (
            <InfoConsumer>
                {data => {
                    const{
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;
                
                    return (
                        <React.Fragment>
                            <HeaderDetails className="container-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                            </HeaderDetails>
                            {/* Nav Link */}
                            <div className="container">
                               <ul className="nav nav-tabs">
                                     {/* About Place Link */}
                                    <li className="nav-item">
                                        <a href="#aboutPlace" 
                                        className="nav-link active" 
                                        role="tab" 
                                        data-toggle="tab"
                                        >Parking Status</a>
                                    </li>
                                    {/* Reviews Link */}
                                    <li className="nav-item">
                                        <a href="#settings" 
                                        className="nav-link" 
                                        role="tab" 
                                        data-toggle="tab"
                                        >Settings</a>
                                    </li>
                                    {/* Map Link */}
                                    <li className="nav-item">
                                        <a href="#map" 
                                        className="nav-link" 
                                        role="tab" 
                                        data-toggle="tab"
                                        >Map</a>
                                    </li>
                                </ul>
                                {/* Tab Pane */}
                                <div className="tab-content mb-5">
                                    {/* About Place Tab */}
                                    <div id="aboutPlace" 
                                    className="tab-pane in active text-center mt-5" 
                                    role="tabpanel">
                                        <h2 className="mb-3">Camera Status</h2>
                                        <table class="table tabel-sm">
                                            <thead>
                                                <tr>
                                                <th scope="col">Camera</th>
                                                <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Camera 1</td>
                                                <td>{this.state.Labtek8_cam1_on ? 'On' : 'Off'}</td>
                                                </tr>
                                                <tr>
                                                <td>Camera 2</td>
                                                <td>{this.state.Labtek8_cam2_on ? 'On' : 'Off'}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h2 className="mb-3">{title}</h2>
                                        <table class="table table-sm">
                                            <thead>
                                                <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col" colSpan="2">Id Number</th>
                                                <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td colSpan="2">Cam 1_01</td>
                                                <td>{this.state.Labtek8_1_01 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">2</th>
                                                <td colSpan="2">Cam 1_02</td>
                                                <td>{this.state.Labtek8_1_02 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">3</th>
                                                <td colSpan="2">Cam 1_03</td>
                                                <td>{this.state.Labtek8_1_03 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">4</th>
                                                <td colSpan="2">Cam 1_04</td>
                                                <td>{this.state.Labtek8_1_04 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">5</th>
                                                <td colSpan="2">Cam 1_05</td>
                                                <td>{this.state.Labtek8_1_05 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">6</th>
                                                <td colSpan="2">Cam 1_06</td>
                                                <td>{this.state.Labtek8_1_06 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">7</th>
                                                <td colSpan="2">Cam 1_07</td>
                                                <td>{this.state.Labtek8_1_07 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">8</th>
                                                <td colSpan="2">Cam 1_08</td>
                                                <td>{this.state.Labtek8_1_08 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">9</th>
                                                <td colSpan="2">Cam 1_09</td>
                                                <td>{this.state.Labtek8_1_09 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">10</th>
                                                <td colSpan="2">Cam 1_10</td>
                                                <td>{this.state.Labtek8_1_10 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">11</th>
                                                <td colSpan="2">Cam 1_11</td>
                                                <td>{this.state.Labtek8_1_11 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">12</th>
                                                <td colSpan="2">Cam 1_12</td>
                                                <td>{this.state.Labtek8_1_12 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">13</th>
                                                <td colSpan="2">Cam 1_13</td>
                                                <td>{this.state.Labtek8_1_13 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">14</th>
                                                <td colSpan="2">Cam 1_14</td>
                                                <td>{this.state.Labtek8_1_14 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">15</th>
                                                <td colSpan="2">Cam 1_15</td>
                                                <td>{this.state.Labtek8_1_15 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">16</th>
                                                <td colSpan="2">Cam 1_16</td>
                                                <td>{this.state.Labtek8_1_16 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">17</th>
                                                <td colSpan="2">Cam 1_17</td>
                                                <td>{this.state.Labtek8_1_17 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">18</th>
                                                <td colSpan="2">Cam 1_18</td>
                                                <td>{this.state.Labtek8_1_18 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">19</th>
                                                <td colSpan="2">Cam 1_19</td>
                                                <td>{this.state.Labtek8_1_19 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">20</th>
                                                <td colSpan="2">Cam 1_20</td>
                                                <td>{this.state.Labtek8_1_20 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">21</th>
                                                <td colSpan="2">Cam 1_21</td>
                                                <td>{this.state.Labtek8_1_21 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">22</th>
                                                <td colSpan="2">Cam 2_1</td>
                                                <td>{this.state.Labtek8_2_01 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">23</th>
                                                <td colSpan="2">Cam 2_2</td>
                                                <td>{this.state.Labtek8_2_02 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">24</th>
                                                <td colSpan="2">Cam 2_3</td>
                                                <td>{this.state.Labtek8_2_03 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">25</th>
                                                <td colSpan="2">Cam 2_4</td>
                                                <td>{this.state.Labtek8_2_04 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">26</th>
                                                <td colSpan="2">Cam 2_5</td>
                                                <td>{this.state.Labtek8_2_05 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">27</th>
                                                <td colSpan="2">Cam 2_6</td>
                                                <td>{this.state.Labtek8_2_06 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">28</th>
                                                <td colSpan="2">Cam 2_7</td>
                                                <td>{this.state.Labtek8_2_07 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">29</th>
                                                <td colSpan="2">Cam 2_8</td>
                                                <td>{this.state.Labtek8_2_08 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">30</th>
                                                <td colSpan="2">Cam 2_9</td>
                                                <td>{this.state.Labtek8_2_09 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">31</th>
                                                <td colSpan="2">Cam 2_10</td>
                                                <td>{this.state.Labtek8_2_10 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">32</th>
                                                <td colSpan="2">Cam 2_11</td>
                                                <td>{this.state.Labtek8_2_11 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">33</th>
                                                <td colSpan="2">Cam 2_12</td>
                                                <td>{this.state.Labtek8_2_12 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">34</th>
                                                <td colSpan="2">Cam 2_13</td>
                                                <td>{this.state.Labtek8_2_13 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">35</th>
                                                <td colSpan="2">Cam 2_14</td>
                                                <td>{this.state.Labtek8_2_14 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">36</th>
                                                <td colSpan="2">Cam 2_15</td>
                                                <td>{this.state.Labtek8_2_15 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">37</th>
                                                <td colSpan="2">Cam 2_16</td>
                                                <td>{this.state.Labtek8_2_16 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">38</th>
                                                <td colSpan="2">Cam 2_17</td>
                                                <td>{this.state.Labtek8_2_17 ? 'Available' : 'Not Available'}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Settings */}
                                    <div className="tab-pane in active text-center mt-5" id="settings"  
                                    role="tabpanel">
                                        <h2 className="mb-3">Camera Configuration</h2>
                                        <table class="table tabel-sm">
                                            <thead>
                                                <tr>
                                                <th scope="col">Cam_Timeout</th>
                                                <th scope="col">End_Time</th>
                                                <th scope="col">Start_Time</th>
                                                <th scope="col">Threshold</th>
                                                <th scope="col">Update_Rate</th>
                                                <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td><input className="form-control" type="number" placeholder="Cam Time Out" id="CamTimeout"/></td>
                                                <td><input className="form-control" type="number" placeholder="Insert End Time" id="EndTime"/></td>
                                                <td><input className="form-control" type="number" placeholder="Insert Start Time" id="StartTime"/></td>
                                                <td><input className="form-control" type="number" placeholder="Insert Threshold" id="Threshold"/></td>
                                                <td><input className="form-control" type="number" placeholder="Insert Update Rate" id="UpdateRate"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmit} id="updateBtn">Update</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h2 className="mb-3">Camera Settings</h2>
                                        <table class="table tabel-sm">
                                            <thead>
                                                <tr>
                                                <th scope="col">Camera</th>
                                                <th scope="col">Url</th>
                                                <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Camera 1</td>
                                                <td><input className="form-control" type="text" placeholder="Insert Update URL" id="URL1"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmitURL1} id="updateBtn">Update</button></td>
                                                </tr>
                                                <tr>
                                                <td>Camera 2</td>
                                                <td><input className="form-control" type="text" placeholder="Insert Update URL" id="URL2"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmitURL2} id="updateBtn">Update</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h2 className="mb-3">Camera 1 Slot Settings</h2>
                                        <table class="table table-sm">
                                            <thead>
                                                <tr>
                                                <th scope="col">Id Number</th>
                                                <th scope="col" colSpan="3">Masking 0</th>
                                                <th scope="col" colSpan="3">Masking 1</th>
                                                <th scope="col" colSpan="2">Reservation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td><input className="form-control" type="text" placeholder="Id Number" id="slotId"/></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 0.0" id="Mask00"/></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 0.1" id="Mask01"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmitMasking0} id="updateBtn">Update Masking 0</button></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 1.0" id="Mask10"/></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 1.1" id="Mask11"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmitMasking1} id="updateBtn">Update Masking 1</button></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmitReservasi} id="updateBtn">Reservasi</button></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmitUnReservasi} id="updateBtn">Unreservasi</button></td>
                                            </tbody>
                                        </table>
                                        <h2 className="mb-3">Camera 2 Slot Settings</h2>
                                        <table class="table table-sm">
                                            <thead>
                                                <tr>
                                                <th scope="col">Id Number</th>
                                                <th scope="col" colSpan="3">Masking 0</th>
                                                <th scope="col" colSpan="3">Masking 1</th>
                                                <th scope="col" colSpan="2">Reservation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td><input className="form-control" type="text" placeholder="Id Number" id="slotId2"/></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 0.0" id="2Mask00"/></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 0.1" id="2Mask01"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmit2Masking0} id="updateBtn">Update Masking 0</button></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 1.0" id="2Mask10"/></td>
                                                <td><input className="form-control" type="number" placeholder="Masking 1.1" id="2Mask11"/></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmit2Masking1} id="updateBtn">Update Masking 1</button></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmit2Reservasi} id="updateBtn">Reservasi</button></td>
                                                <td><button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleSubmit2UnReservasi} id="updateBtn">Unreservasi</button></td>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Map */}
                                    <div className="tab-pane" id="map" role="tabpanel">
                                        <iframe 
                                        src={maps} 
                                        style={{
                                            border: '0', 
                                            height: '28.125rem', 
                                            width: '100%', 
                                            frameborder: '0'
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );

                }}
            </InfoConsumer>
        )
    }
}

export default LabtekVIII;

const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 50vh;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;

h1 {
    padding-top: 10%;
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