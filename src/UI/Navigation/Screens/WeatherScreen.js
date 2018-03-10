import React,{Component} from 'react';
import {
    View,
    Text
}from 'react-native';
import Styles from "../../../Assets/Styles";
import WeatherBlock from "../../Containers/WeatherBlock";
import LocationBlock from "../../Containers/LocationBlock";

export default class WeatherScreen extends Component {
    render() {
        return (
            <View style={Styles.content}>
                <LocationBlock/>
                <WeatherBlock/>
            </View>
        );
    }
}