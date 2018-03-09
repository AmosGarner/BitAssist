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
        console.log(this.props.time);
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
        let binaryValueArray = dec2Bin(value).toString().split('');
        let binaryArray = [0,0,0,0];

        binaryArray = binaryArray.map((value, index) => {
            if(binaryValueArray[index] === "1"){
                return 1;
            }
            return 0;
        });

        let binaryCell = binaryArray.reverse().map((value, index) => {
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