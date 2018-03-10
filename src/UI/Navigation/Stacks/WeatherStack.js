import React from 'react';
import { StackNavigator} from 'react-navigation';
import WeatherScreen from "../Screens/WeatherScreen";
import NavigationOptions from "./NavigationOptions";

export default StackNavigator(
    {
        Weather: { screen: WeatherScreen },
    },
    {
        navigationOptions: NavigationOptions
    }
);

