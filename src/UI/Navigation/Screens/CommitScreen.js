import React,{Component} from 'react';
import {
    View,
    Text
}from 'react-native';
import Styles from '../../../Assets/Styles';

export default class CommitScreen extends Component {
    render() {
        return (
            <View style={Styles.content}>
                <Text style={Styles.largeText}>CheckList!</Text>
            </View>
        );
    }
}