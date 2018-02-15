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

export default class App extends Component<{},State> {

  isTimeAfterNoon(hour){
    return hour > 12;
  }

  getDateTimeObject(){
      let dateObj = new Date();

      let date = {
          day: dateObj.getDate(),
          month: dateObj.getMonth()+1,
          year: dateObj.getYear()-100
      };
      let time = {
          isAfternoon: this.isTimeAfterNoon(dateObj.getHours()) ,
          hour: (dateObj.getHours() > 12 ? dateObj.getHours()-12:dateObj.getHours()),
          minute: dateObj.getMinutes(),
          second: dateObj.getSeconds()
      };

      return {
        date: date, time: time
      };
  }

  getLocationObject(){
      return{
          city: "Knoxville",
          state: "TN",
          lat: 35.9606,
          lon: 83.9207
      };
  }

  getWeatherObject(){
      return[
          {
              high: 50,
              low: 40,
              condition: "Sunny"
          },
          {
              high: 50,
              low: 40,
              condition: "Sunny"
          },
          {
              high: 50,
              low: 40,
              condition: "Sunny"
          },
          {
              high: 50,
              low: 40,
              condition: "Sunny"
          },
          {
              high: 50,
              low: 40,
              condition: "Sunny"
          }
      ];
  }

  constructor(){
    super();

    dateTimeObject = this.getDateTimeObject();

    this.state = {
        date: dateTimeObject.date,
        time: dateTimeObject.time,
        weather: this.getWeatherObject(),
        location: this.getLocationObject()
    };
  }

  render() {
    let weather = this.state.weather.map((entry) => {
      return(<Text>{entry.condition}{'\n'}Hi: {entry.high}{'\n'}{entry.low}{'\n'}</Text>);
    });

    let timeObject = new TimeObject();

    return (
      <View style={styles.container}>
          <TimeBlock time={timeObject} />

          <BinTimeBlock time={timeObject} />

          <HexTimeBlock time={timeObject} />

          <DateBlock date={new DateObject()} />

          <Text style={styles.welcome}>Weather: </Text>
          <Text> {weather}</Text>

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
