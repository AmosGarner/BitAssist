import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Styles from "../Assets/Styles";
import WeatherIcon from "../Components/WeatherIcon";

export default class WeatherBlock extends Component<{},{}>{
    constructor(){
        super();
        this.state = {};
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.getWeatherDateFromCoords(position.coords.latitude, position.coords.longitude);
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

    getWeatherDateFromCoords(latitude, longitude){
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&units=imperial&appid=b14b4133950802096d4bc54c755c28cb')
            .then((response) => response.json())
            .then((response) => {
                let weatherData = [
                    {
                        min : response.list[0],
                        max : response.list[4]
                    },
                    {
                        min : response.list[8],
                        max : response.list[12]
                    },
                    {
                        min : response.list[16],
                        max : response.list[20]
                    },
                    {
                        min : response.list[24],
                        max : response.list[28]
                    },
                    {
                        min : response.list[32],
                        max : response.list[36]
                    }
                ];
                this.setState({
                    weatherData: weatherData
                });
            })
            .catch((error) => {console.log(error)})
    };

    render(){
        let weather = null;
        if(this.state.weatherData){
            weather = this.state.weatherData.map((entry, index) => {
                return(
                    <View key={index} style={[Styles.box, Styles.column]}>
                        <Text>{entry.max.weather[0].main}</Text>
                        <Text>
                            {Math.round(entry.max.main.temp)}
                            /
                            {Math.round(entry.min.main.temp)}
                        </Text>
                    </View>
                );
            });
        }

        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <Text>Weather: </Text>
                    <View style={Styles.row}>
                        {weather ? weather : <Text/>}
                    </View>
                </View>
            </View>
        );
    }
}