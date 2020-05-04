import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

export default class ThirdComponent extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     let headerTitle = 'Third Page';
    //     let headerStyle = { backgroundColor: '#ffff',borderBottomColor: 'white' };
    //     let headerTitleStyle = { color: 'rgb(226,81,65)' };
    //     let headerTintColor = 'blue';
    //     return { headerTitle, headerStyle, headerTitleStyle, headerTintColor };
    // };

    render() {
        return (
            <View style={{ flex: 1,
                    backgroundColor: 'tomato',
                    alignItems: 'center',
                    justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    This is Third Screen
                </Text>
            </View>
        );
    }
}
