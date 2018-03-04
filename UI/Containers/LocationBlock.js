import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import "isomorphic-fetch";
import Styles from '../Assets/Styles';

export default class LocationBlock extends Component<{},{}>{
    constructor(){
        super();
        this.state = {};
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                this.GetLocationFromCoords();
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

    GetLocationFromCoords(){
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.state.latitude + ','+ this.state.longitude+ '&sensor=true')
            .then((response) => response.json())
            .then((response) => {
                let locationData = response.results[0].address_components;
                this.setState({
                    city: locationData[3].short_name,
                    county: locationData[4].short_name,
                    state: locationData[5].short_name,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <Text style={Styles.mediumText}>{this.state.city} , {this.state.county} , {this.state.state}</Text>
                </View>
            </View>
        );
    }
}