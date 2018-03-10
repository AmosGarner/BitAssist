import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import ClockScreen from './UI/Screens/ClockScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from "./UI/Screens/SettingsScreen";
import WeatherScreen from "./UI/Screens/WeatherScreen";
import CommitScreen from "./UI/Screens/CommitScreen";
import {TouchableHighlight, Button} from 'react-native';

console.disableYellowBox = true;

const stackNavOptions = ({ navigation }) => ({
    title: 'BitAssist',
    headerStyle: {backgroundColor:'#333333'},
    headerTitleStyle: {color:'white'},
    headerRight: (
        <TouchableHighlight>
            <IonIcon.Button
                name='ios-construct'
                backgroundColor='#grey'
                size={30}
                iconStyle={{marginRight: 0}}
                borderRadius={0}
            />
        </TouchableHighlight>
    )
});

const ClockStack = StackNavigator(
    {
        Clock: { screen: ClockScreen },
        Settings: { screen: SettingsScreen },
    },
    {navigationOptions: stackNavOptions}
);

const WeatherStack = StackNavigator({
        Weather: { screen: WeatherScreen },
        Settings: { screen: SettingsScreen },
    },
    {navigationOptions: stackNavOptions}
);

const CommitStack = StackNavigator({
        Commit: { screen: CommitScreen },
        Settings: { screen: SettingsScreen },
    },
    {navigationOptions: stackNavOptions}
);

export default TabNavigator(
    {
        Clock: { screen: ClockStack },
        Weather:{screen: WeatherStack},
        Commit:{screen: CommitStack},
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch(routeName){
                    case "Clock":
                        iconName = `ios-clock${focused ? '' : '-outline'}`;
                        break;
                    case "Weather":
                        iconName = `ios-cloud${focused ? '' : '-outline'}`;
                        break;
                    case "Commit":
                        iconName = `ios-git-commit${focused ? '' : '-outline'}`;
                        break;
                    default:
                        iconName = `ios-help${focused ? '' : '-outline'}`;
                        break;
                }
                return <IonIcon name={iconName} size={40} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#333333'
            },
            showLabel: false
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
)