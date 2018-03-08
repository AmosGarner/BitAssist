import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import Styles from "../Assets/Styles";
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeaderBlock extends Component<{},{}>{
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <View><Text style={Styles.mediumText}>NerdThirty</Text></View>
            </View>
        );
    }
}