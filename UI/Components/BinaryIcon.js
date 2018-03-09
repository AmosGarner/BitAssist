import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class BinaryIcon extends Component<{},{}>{
    render(){
        let iconColor = 'grey';
        if(this.props.value === 1){
            iconColor = 'orange';
        }

        return(
            <View>
                <Icon name='ios-disc' size={20} color={iconColor}/>
            </View>
        );
    }
}