import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Styles from "../Assets/Styles";
import WeatherIcon from "../Components/WeatherIcon";
import Icon from 'react-native-vector-icons/Ionicons';

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
                        max : response.list[1]
                    },
                    {
                        min : response.list[2],
                        max : response.list[7]
                    },
                    {
                        min : response.list[10],
                        max : response.list[15]
                    },
                    {
                        min : response.list[18],
                        max : response.list[23]
                    },
                    {
                        min : response.list[26],
                        max : response.list[39]
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
                console.log(entry);
                let low = Math.floor(entry.min.main.temp_min);
                let high = Math.floor(entry.max.main.temp_max);
                let date = entry.min.dt_txt;

                let month = (date[5] === "0" ?" "+date[6]:date[5]+date[6]);
                let day = (date[8] === "0" ?" "+date[9]:date[8]+date[9]);

                let thermometerColor = 'grey';
                if(high >= 80){
                    thermometerColor = 'red';
                }else if(high <= 50){
                    thermometerColor = 'lightblue';
                }

                return(
                    <View key={index} style={[Styles.box, Styles.column]}>
                        <WeatherIcon weatherCondition={entry.max.weather[0].main}/>
                        <Text>
                            <Icon name='ios-thermometer' size={20} color={thermometerColor}/>
                            &nbsp;
                            {low}
                            /
                            {high}
                        </Text>
                        <Text>
                            <Icon name='md-calendar' size={20} color='grey'/>
                            &nbsp;
                            {month}
                            /
                            {day}
                        </Text>
                    </View>
                );
            });
        }

        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <View style={Styles.row}>
                        {weather ? weather : <Text/>}
                    </View>
                </View>
            </View>
        );
    }
}