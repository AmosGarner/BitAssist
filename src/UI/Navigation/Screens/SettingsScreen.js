import React,{Component} from 'react';
import {
    View,
    Text,
}from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title:'Time Settings'
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{SettingsScreen.navigationOptions.title}!</Text>
            </View>
        );
    }
}