import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

export default class LocationBlock extends Component<{},{}>{
    constructor(){
        super();
        this.state = {
            latitude: null,
            longitude: null,
            city: null,

        }
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
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

    render(){
        return(
            <View style={this.props.style}>
                <Text>Location: </Text>
                <Text>{this.props.location.city} ,{this.props.location.state}</Text>
                <Text>{this.state.latitude} : {this.state.longitude}</Text>
            </View>
        );
    }
}