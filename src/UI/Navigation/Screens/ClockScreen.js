import React,{Component} from 'react';
import {
    View,
    Text,
    Button
}from 'react-native';
import Styles from '../../../Assets/Styles';
import TimeBlock from "../../Containers/TimeBlock";
import BinTimeBlock from "../../Containers/BinTimeBlock";
import HexTimeBlock from "../../Containers/HexTimeBlock";
import TimeObject from "../../../Domain/TimeObject";

export default class ClockScreen extends Component {
    constructor(){
        super();
        this.state = {
            timeObject : new TimeObject(),
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
        return (
            <View style={Styles.content}>
                <TimeBlock time={this.state.timeObject}/>
                <BinTimeBlock time={this.state.timeObject}/>
                <HexTimeBlock time={this.state.timeObject}/>
            </View>
        );
    }
}