import React,{Component} from 'react';
import {
    View,
}from 'react-native';
import Styles from '../../../Assets/Styles';
import CommitBlock from "../../Containers/CommitBlock";

export default class CommitScreen extends Component{
    render() {
        return (
            <View style={Styles.content}>
                <CommitBlock />
            </View>
        );
    }
}