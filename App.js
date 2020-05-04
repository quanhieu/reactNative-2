import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';

const App = createStackNavigator({
    MainScreen: {
        screen: MainComponent
    },
    DetailScreen: {
        screen: DetailComponent
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            title: 'Third Page',
            headerTitleAlign: "center"
        }
    },

})

export default createAppContainer(App);
