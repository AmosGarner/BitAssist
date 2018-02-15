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
      <View style={styles.container}>
          <TimeBlock time={timeObject} />
          <Text>{'\n'}</Text>
          <BinTimeBlock time={timeObject} />
          <Text>{'\n'}</Text>
          <HexTimeBlock time={timeObject} />
          <Text>{'\n'}</Text>
          <DateBlock date={new DateObject()} />
          <Text>{'\n'}</Text>
          <WeatherBlock weather={weatherArray}/>
          <Text>{'\n'}</Text>
          <LocationBlock location={new LocationObject()}/>

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
