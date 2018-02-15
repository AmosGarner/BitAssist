import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class WeatherBlock extends Component<{},{}>{
    render(){
        let weather = this.props.weather.map((entry, index) => {
            return(
                <Text key={index}>{entry.condition} : {entry.high} / {entry.low}</Text>

            );
        });

        return(
            <View style={this.weatherBlockStyles.container}>
                <Text>Weather: </Text>
                {weather}
            </View>
        );
    }

    weatherBlockStyles = StyleSheet.create({
        container: {
            alignItems: 'center'
        }
    });
}