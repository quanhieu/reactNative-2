import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';


const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: MainComponent
    },
    DetailScreen: {
        screen: DetailComponent
    },
    ThirdScreen: {
        screen: ThirdComponent
    },

})

export default AppNavigator;
