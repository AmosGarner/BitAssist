import React,{Component} from 'react';
import {
    View,
    Text
}from 'react-native';

export default class WeatherScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Weather!</Text>
            </View>
        );
    }
}