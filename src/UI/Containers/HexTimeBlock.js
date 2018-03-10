import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {dec2Hex} from '../../Domain/BaseConvertor';
import Styles from '../Assets/Styles';

export default class HexTimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <Text style={Styles.largeText}>
                        #{dec2Hex(this.props.time.hour)}:
                        {dec2Hex(this.props.time.minute)}:
                        {dec2Hex(this.props.time.second)}
                    </Text>
                </View>
            </View>
        );
    }
}