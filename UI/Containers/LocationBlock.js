import React, { Component } from 'react';
import {
    ActivityIndicator,
    Text,
    View,

} from 'react-native';
import Styles from '../Assets/Styles';

export default class LocationBlock extends Component<{},{}>{
    constructor(){
        super();
        this.state = {
            isLoading : true
        };
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                this.getLocationInfo();
            },
            (error) => {
                alert(error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
    }

    async getLocationInfo(){
        return fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.state.latitude + ','+ this.state.longitude+ '&sensor=true')
            .then((response) => response.json())
            .then((response) => {
                let locationData = response.results[0].address_components;
                this.setState({
                    isLoading: false,
                    city: locationData[3].short_name,
                    county: locationData[4].short_name,
                    state: locationData[5].short_name,
                }, function(){});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        let content = (<ActivityIndicator/>);
        if(!this.state.isLoading){
            content = (<Text style={Styles.mediumText}>{this.state.city} , {this.state.county} , {this.state.state}</Text>);
        }

        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    {content}
                </View>
            </View>
        );
    }
}