import React from 'react';
import { StackNavigator} from 'react-navigation';
import NavigationOptions from "./NavigationOptions";
import ClockScreen from "../Screens/ClockScreen";

export default StackNavigator(
    {
        Clock: { screen: ClockScreen }
    },
    {
        navigationOptions: NavigationOptions
    }
);

