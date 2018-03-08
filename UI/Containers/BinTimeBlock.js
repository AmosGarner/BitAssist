import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {dec2Bin} from '../../Domain/BaseConvertor';
import Styles from '../Assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BinTimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.binaryContainer}>
                    <View style={Styles.binaryRow}>
                        <View style={Styles.binaryColumn}>
                            <View style={Styles.binaryRow}>
                                <View style={Styles.binaryCell}>
                                    <Icon name="ios-egg-outline" size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                </View>
                                <View style={Styles.binaryCell}>
                                    <Icon name="ios-egg-outline" size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.binaryColumn}>
                            <View style={Styles.binaryRow}>
                                <View style={Styles.binaryCell}>
                                    <Icon name="ios-egg-outline" size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                </View>
                                <View style={Styles.binaryCell}>
                                    <Icon name="ios-egg-outline" size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.binaryColumn}>
                            <View style={Styles.binaryRow}>
                                <View style={Styles.binaryCell}>
                                    <Icon name="ios-egg-outline" size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                </View>
                                <View style={Styles.binaryCell}>
                                    <Icon name="ios-egg-outline" size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                    <Icon name='ios-egg' size={20}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}