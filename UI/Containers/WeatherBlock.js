import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+'37'+'&lon='+'82'+'&units=imperial&appid=b14b4133950802096d4bc54c755c28cb')
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
            console.log(this.state.weatherData);
            weather = this.state.weatherData.map((entry, index) => {
                console.log(this.state.weatherData);
                entry.map((data, index) => {
                    console.log(data);
                });
                return(
                    <Text key={index}> :  / </Text>
                );
            });
        }

        return(
            <View style={this.props.style}>
                <Text>Weather: </Text>
                {weather ? weather : <Text/>}
            </View>
        );
    }
}