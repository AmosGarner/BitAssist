import React from 'react';
import { StackNavigator} from 'react-navigation';
import CommitScreen from "../Screens/CommitScreen";
import NavigationOptions from "./NavigationOptions";

export default StackNavigator(
    {
        Commit: { screen: CommitScreen },
    },
    {
        navigationOptions: NavigationOptions
    }
);

