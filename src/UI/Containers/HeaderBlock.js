import React, { Component } from 'react';
import {
    Text,
    View,

} from 'react-native';
import Styles from "../Assets/Styles";

export default class HeaderBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.column}>
                    <Text style={Styles.mediumText}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}