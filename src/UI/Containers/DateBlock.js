import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Styles from "../../Assets/Styles";

export default class DateBlock extends Component<{},{}>{
    render(){
        return(
            <View style={Styles.row}>
                <View style={Styles.column}>
                    <Text style={Styles.largeText}>{this.props.date.month} / {this.props.date.day} / {this.props.date.year}</Text>
                </View>
            </View>
        );
    }
}