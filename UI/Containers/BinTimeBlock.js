import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {dec2Bin} from '../../Domain/BaseConvertor';

export default class BinTimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.binTimeBlockStyles.container}>
                <Text>Hexadecimal Time: </Text>
                <Text>
                    #{dec2Bin(this.props.time.hour)}:
                    {dec2Bin(this.props.time.minute)}:
                    {dec2Bin(this.props.time.second) + " "}
                    {this.props.time.isAfternoon}
                </Text>
            </View>
        );
    }

    binTimeBlockStyles = StyleSheet.create({
        container: {
            alignItems: 'center'
        }
    });
}