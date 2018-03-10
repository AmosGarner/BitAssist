import React, { Component } from 'react';

import {
    Platform,
    View,
    Text
} from 'react-native';

import HeaderBlock from './src/UI/Containers/HeaderBlock';
import TimeBlock from './src/UI/Containers/TimeBlock';
import TimeObject from './src/Domain/TimeObject';
import DateObject from './src/Domain/DateObject';
import DateBlock from "./src/UI/Containers/DateBlock";
import HexTimeBlock from "./src/UI/Containers/HexTimeBlock";
import BinTimeBlock from "./src/UI/Containers/BinTimeBlock";
import WeatherBlock from "./src/UI/Containers/WeatherBlock";
import LocationBlock from "./src/UI/Containers/LocationBlock";
import Styles from "./src/UI/Assets/Styles";

export default class App extends Component<{},State> {
    constructor(){
        console.disableYellowBox = true;
        super();
        this.state = {
            timeObject : new TimeObject(),
            headerTitle : 'Nerd Thirty',
        };
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                timeObject: new TimeObject()
            })
        }, 1000);
    }

    render() {
        let headerTitle = this.state.headerTitle;

        return (
          <View style={[Styles.appContainer, Styles.ios]}>
              <View style={Styles.header}>
                  <HeaderBlock style={Styles.row} title={headerTitle}/>
              </View>
              {this.renderAppContent()}
              <View style={Styles.footer}/>
          </View>
        );
    }

    renderAppContent() {
        return(
            <View style={Styles.content}>
                <TimeBlock style={[Styles.row]} time={this.state.timeObject}/>
                <BinTimeBlock style={[Styles.row]} time={this.state.timeObject}/>
                <HexTimeBlock style={[Styles.row]} time={this.state.timeObject}/>
                <DateBlock style={[Styles.row]} date={new DateObject()}/>
                <WeatherBlock style={[Styles.row]}/>
                <LocationBlock style={[Styles.row]}/>
            </View>
        );
    }
}