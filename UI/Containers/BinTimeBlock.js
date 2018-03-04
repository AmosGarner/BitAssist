import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {dec2Bin} from '../../Domain/BaseConvertor';
import Styles from '../Assets/Styles';

export default class BinTimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <Text style={Styles.largeText}>
                        #{dec2Bin(this.props.time.hour)}:
                        {dec2Bin(this.props.time.minute)}:
                        {dec2Bin(this.props.time.second)}
                    </Text>
                </View>
            </View>
        );
    }
}