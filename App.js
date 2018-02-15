import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import TimeBlock from './UI/Containers/TimeBlock';
import TimeObject from './Domain/TimeObject';
import DateObject from './Domain/DateObject';
import DateBlock from "./UI/Containers/DateBlock";
import HexTimeBlock from "./UI/Containers/HexTimeBlock";
import BinTimeBlock from "./UI/Containers/BinTimeBlock";
import WeatherBlock from "./UI/Containers/WeatherBlock";
import WeatherObject from "./Domain/WeatherObject";

export default class App extends Component<{},State> {

  getLocationObject(){
      return{
          city: "Knoxville",
          state: "TN",
          lat: 35.9606,
          lon: 83.9207
      };
  }

  constructor(){
    super();
    this.state = {
        location: this.getLocationObject()
    };
  }

  render() {
    let timeObject = new TimeObject();
    let weatherArray = [
        new WeatherObject(),
        new WeatherObject(),
        new WeatherObject(),
        new WeatherObject(),
        new WeatherObject()
    ];

    return (
      <View style={styles.container}>
          <TimeBlock time={timeObject} />

          <BinTimeBlock time={timeObject} />

          <HexTimeBlock time={timeObject} />

          <DateBlock date={new DateObject()} />

          <WeatherBlock weather={weatherArray}/>

          <Text style={styles.welcome}>Location: </Text>
          <Text>{this.state.location.city} ,{this.state.location.state}</Text>
          <Text>{this.state.location.lat}&deg;N  : {this.state.location.lon}&deg;S</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
