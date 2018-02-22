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
import LocationBlock from "./UI/Containers/LocationBlock";
import LocationObject from "./Domain/LocationObject";

export default class App extends Component<{},State> {
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
      <View style={styles.appContainer}>
          <TimeBlock time={timeObject}/>
          <BinTimeBlock time={timeObject}/>
          <HexTimeBlock time={timeObject}/>
          <DateBlock date={new DateObject()}/>
          <WeatherBlock weather={weatherArray}/>
          <LocationBlock location={new LocationObject()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#46413c',
    },
});
