import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {dec2Bin} from '../../Domain/BaseConvertor';
import Styles from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BinTimeBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <View style={Styles.binaryContainer}>
                    <View style={Styles.binaryRow}>
                        <View style={Styles.binaryColumn}>
                            <View style={Styles.binaryRow}>
                                <View style={Styles.binaryCell}>
                                    <Icon name="stop" backgroundColor="#3b5998" size={20} style='solid'/>
                                    <Icon name='stop-circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                </View>
                                <View style={Styles.binaryCell}>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.binaryColumn}>
                            <View style={Styles.binaryRow}>
                                <View style={Styles.binaryCell}>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                </View>
                                <View style={Styles.binaryCell}>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.binaryColumn}>
                            <View style={Styles.binaryRow}>
                                <View style={Styles.binaryCell}>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                </View>
                                <View style={Styles.binaryCell}>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                    <Icon name='circle' size={20}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}