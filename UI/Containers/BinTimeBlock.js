import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {dec2Bin} from '../../Domain/BaseConvertor';
import Styles from '../Assets/Styles';
import BinaryIcon from '../Components/BinaryIcon';

export default class BinTimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.binaryContainer}>
                    <View style={Styles.binaryRow}>
                        {this.getBinaryGrid(this.props.time.hour)}
                        {this.getBinaryGrid(this.props.time.minute)}
                        {this.getBinaryGrid(this.props.time.second)}
                    </View>
                </View>
            </View>
        );
    }

    getBinaryGrid(value){
        let baseValue = value%10;
        let indexValue = Math.floor(value/10);
        return(
            <View style={Styles.binaryColumn}>
                <View style={Styles.binaryRow}>
                    {this.generateBinaryCell(indexValue)}
                    {this.generateBinaryCell(baseValue)}
                </View>
            </View>
        );
    }

    generateBinaryCell(value){
        String.prototype.paddingStart = function (paddingValue) {
            return String(paddingValue + this).slice(-paddingValue.length);
        };
        let binaryArray = dec2Bin(value).toString().paddingStart('0000').split('');
        let binaryCell = binaryArray.map((value, index) => {
            return(
                <BinaryIcon key={index} value={value}/>
            );
        });

        return(
            <View style={Styles.binaryCell}>
                {binaryCell}
            </View>
        );
    }
}