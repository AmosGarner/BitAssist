import React, { Component } from 'react';

import {
    Platform,
    View,
    Text
} from 'react-native';

import HeaderBlock from './UI/Containers/HeaderBlock';
import TimeBlock from './UI/Containers/TimeBlock';
import TimeObject from './Domain/TimeObject';
import DateObject from './Domain/DateObject';
import DateBlock from "./UI/Containers/DateBlock";
import HexTimeBlock from "./UI/Containers/HexTimeBlock";
import BinTimeBlock from "./UI/Containers/BinTimeBlock";
import WeatherBlock from "./UI/Containers/WeatherBlock";
import LocationBlock from "./UI/Containers/LocationBlock";
import Styles from "./UI/Assets/Styles";
import TimerMixin from 'react-timer-mixin';

export default class App extends Component<{},State> {
    constructor(){
        super();
        this.state = {
            timeObject : new TimeObject()
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                timeObject: new TimeObject()
            })
        }, 1000);
    }

    render() {
        return (
          <View style={[Styles.appContainer, Styles.ios]}>
              <View style={Styles.header}>
                  <HeaderBlock/>
              </View>
              <View style={Styles.content}>
                  <TimeBlock style={[Styles.row]} time={this.state.timeObject}/>
                  <BinTimeBlock style={[Styles.row]} time={this.state.timeObject}/>
                  <HexTimeBlock style={[Styles.row]} time={this.state.timeObject}/>
                  <DateBlock style={[Styles.row]} date={new DateObject()}/>
                  <WeatherBlock style={[Styles.row]} />
                  <LocationBlock style={[Styles.row]}/>
              </View>
              <View style={Styles.footer}/>
          </View>
        );
  }
}