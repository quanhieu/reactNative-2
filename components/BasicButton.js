import React, { Component } from 'react';
import { Alert, View, Button } from 'react-native';
// import Button from 'react-native-button';

export default class BasicButton extends Component {
    _onPressButton = () => {
        Alert.alert("You pressed the button !");
    }
    render() {
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {/* <Button style={{
                    fontSize: 25,
                    color: 'white',
                    backgroundColor: 'green',
                    padding: 15,
                    borderRadius: 20
                }}
                onPress={this._onPressButton}>
                This is a button
            </Button> */}
            <View style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 16,
                shadowRadius: 20,
                shadowOpacity: 0.5
            }}>
                <Button onPress={this._onPressButton}
                    title="This is a button"
                    color='red'
                />
            </View>


            </View>
        );
    }
}
