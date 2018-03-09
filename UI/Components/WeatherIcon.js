import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class WeatherIcon extends Component<{},{}>{
    render(){
        console.log(this.props.weatherCondition);
        let iconName;
        switch (this.props.weatherCondition){
            case "Thunderstorm":
                iconName = 'ios-thunderstorm';
                break;
            case "Drizzle":
                iconName = 'md-rainy';
                break;
            case "Rain":
                iconName = 'ios-rainy';
                break;
            case "Snow":
                iconName = 'ios-snow';
                break;
            case "Atmosphere":
                iconName = 'ios-partly-sunny';
                break;
            case "Clear":
                iconName = 'ios-sunny';
                break;
            case "Clouds":
                iconName = 'ios-cloud';
                break;
            case "Extreme":
                iconName = 'ios-alert';
                break;
            case "Additional":
                iconName = 'ios-alert';
                break;
            default:
                iconName = 'ios-help';
                break;
        }
        return(
            <View>
                <Icon name={iconName} size={35}/>
            </View>
        );
    }
}