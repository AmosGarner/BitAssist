import React from 'react';
import {TabNavigator, TabBarBottom } from 'react-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ClockStack from "./UI/Navigation/Stacks/ClockStack";
import WeatherStack from "./UI/Navigation/Stacks/WeatherStack";
import CommitStack from "./UI/Navigation/Stacks/CommitStack";

console.disableYellowBox = true;

export default TabNavigator(
    {
        Clock: { screen: ClockStack },
        Weather: {screen: WeatherStack},
        Commit: {screen: CommitStack},
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