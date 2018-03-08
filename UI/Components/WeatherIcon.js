import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import Styles from "../Assets/Styles";
import Icon from "react-native-vector-icons/Ionicons";

export default class WeatherIcon extends Component<{},{}>{
    render(){
        console.log(this.props.weatherCondition);
        return(
            <View>
            </View>
        );
    }
}