import React, { Component } from 'react';
import { placeInfo, detailInfo} from '../data';
import fire from '../fire';

const InfoContext = React.createContext();

class InforProvider extends Component {

    constructor(){
        super();
        this.database = fire.database().ref('free_space/Labtek_8/cam_1').child('free');
        this.state = {
            info: placeInfo,
            detailInfo: detailInfo,
            Avail_Labtek8 :"",
        }
    }

    updateData(){
        this.database.on('value', snap => {
            this.setState({
            Avail_Labtek8: snap.val(),
            });
        });
    }

    componentDidMount(){
        this.updateData();
    }

    render() {
        return (
            <InfoContext.Provider value={{
                info: this.state.info,
                reviews: this.state.reviews,
                maps: this.state.maps,
                headerTitle: this.state.headerTitle,
                headerSubTitle: this.state.headerSubTitle,
                headerText: this.state.headerText,
                detailInfo: this.state.detailInfo,
                news: this.state.news,
                name: this.state.name,
                avatar: this.state.avatar,
                comment: this.state.comment,
                Avail_Labtek8: this.state.Avail_Labtek8
            }}>
                {this.props.children}
            </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export {InforProvider, InfoConsumer};