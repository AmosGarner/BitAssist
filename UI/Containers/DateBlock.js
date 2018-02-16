import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

export default class DateBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.dateBlockStyles.container}>
                <Text>Date: </Text>
                <Text>{this.props.date.month} / {this.props.date.day} / {this.props.date.year}</Text>
            </View>
        );
    }

    dateBlockStyles = StyleSheet.create({
        container: {
            alignItems: 'center'
        }
    });
}