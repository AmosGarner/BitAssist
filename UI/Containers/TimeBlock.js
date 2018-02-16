import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

export default class TimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <Text>Time Block: {(this.props.time.militaryTime)?"Military":"Standard"}</Text>
                <Text>
                    {this.props.time.hour}:
                    {this.props.time.minute}:
                    {this.props.time.second + " "}
                    {this.props.time.indicator}
                </Text>
            </View>
        );
    }
}