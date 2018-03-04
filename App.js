import React, { Component } from 'react';

import {
  Platform,
  View,
} from 'react-native';

import TimeBlock from './UI/Containers/TimeBlock';
import TimeObject from './Domain/TimeObject';
import DateObject from './Domain/DateObject';
import DateBlock from "./UI/Containers/DateBlock";
import HexTimeBlock from "./UI/Containers/HexTimeBlock";
import BinTimeBlock from "./UI/Containers/BinTimeBlock";
import WeatherBlock from "./UI/Containers/WeatherBlock";
import LocationBlock from "./UI/Containers/LocationBlock";
import Styles from "./UI/Assets/Styles";


export default class App extends Component<{},State> {

    render() {
    let timeObject = new TimeObject();
    return (
      <View style={[Styles.appContainer, Styles.ios]}>
          <View style={Styles.header}/>
          <View style={Styles.content}>
              <TimeBlock style={[Styles.row]} time={timeObject}/>
              <BinTimeBlock style={[Styles.row]} time={timeObject}/>
              <HexTimeBlock style={[Styles.row]} time={timeObject}/>
              <DateBlock style={[Styles.row]} date={new DateObject()}/>
              <WeatherBlock style={[Styles.row]} />
              <LocationBlock style={[Styles.row]}/>
          </View>
          <View style={Styles.footer}/>
      </View>
    );
  }
}