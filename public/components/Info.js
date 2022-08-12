import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';
import fire from '../fire';

class Info extends Component {

    // constructor(){
    //     super();

    //     this.databaseL8 = fire.database().ref('LabtekVIII').child('Available');

    //     this.state={
    //         Avail_Labtek8 :"",
    //         Avail_Labtek5 :"",
    //     };
    // }

    // componentDidMount(){
    //     this.databaseL8.on('value', snap => {
    //         this.setState({
    //             Avail_Labtek8: snap.val()
    //         });
    //     });
    // }

    render() {

        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            link,
            Avail_Labtek8
        } = this.props.item;

        return (
            <InfoConsumer>
                {data => (
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" stylle={{ width: '18rem' }}>
                            <img src={img} alt={headerTitle} className="card-img-top"/>
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                                <h5 className="card-title">{headerSubTitle} {Avail_Labtek8}</h5>
                                <p className="card-text">{headerText}</p>
                                <Link
                                to={link}
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        )
    }
}

export default Info;