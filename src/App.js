import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ClockScreen from './UI/Screens/ClockScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from "./UI/Screens/SettingsScreen";
import WeatherScreen from "./UI/Screens/WeatherScreen";
import CommitScreen from "./UI/Screens/CommitScreen";

export default TabNavigator(
    {
        Clock: { screen: ClockScreen },
        Weather:{screen: WeatherScreen},
        Commit:{screen: CommitScreen},
        Settings:{screen: SettingsScreen},
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
                        iconName = `ios-cloud${focused ? '' : '-outline'}`;;
                        break;
                    case "Commit":
                        iconName = `ios-git-commit${focused ? '' : '-outline'}`;;
                        break;
                    case "Settings":
                        iconName = `ios-construct${focused ? '' : '-outline'}`;;
                        break;
                    default:
                        iconName = `ios-help${focused ? '' : '-outline'}`;;
                        break;
                }
                return <IonIcon name={iconName} size={40} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'grey',
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