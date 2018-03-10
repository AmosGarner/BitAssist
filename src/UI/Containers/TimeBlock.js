import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import Styles from '../../Assets/Styles';

export default class TimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <Text style={Styles.largeText}>
                        {this.props.time.hour}:
                        {this.props.time.minute}:
                        {this.props.time.second + " "}
                        {this.props.time.indicator}
                    </Text>
                </View>
            </View>
        );
    }
}