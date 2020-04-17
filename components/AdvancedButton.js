import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

export default class AdvancedButton extends Component {
    _onPressButton = () => {
        alert('You pressed the button !');
    };

    render() {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableHighlight
                onPress={this._onPressButton}
                underlayColor='red'
                onShowUnderlay={() => {
                    alert('onShowUnderlay button !');
                }}
            >
                <View style={{backgroundColor: 'green'}}>
                    {/* <Image
                        style={{width: 100, height: 40}}
                        source={require('./images/touchableHightlightButton.png')}
                        >
                    </Image> */}
                    <Text style={{
                        color: 'white',
                        padding: 20,
                        fontSize: 18,
                    }}>
                        Touchable Highlight
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                useForeground={false}
            >
                <View style={{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'blue',
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        Touchable Native Feedback
                    </Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableOpacity
                onPress={this._onPressButton}
                activeOpacity={0.7}
            >
                <View style={{
                    width: 200,
                    height: 50,
                    backgroundColor: 'red',
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center',
                    }}>Touch able Opacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback
                // onPress={this._onPressButton}
                onLongPress={() => {
                    alert('onLongPress');
                }}
                // onPressIn={()=> {
                //     alert("onPressIn");
                // }}
                // onPressOut={()=> {
                //     alert("onPressOut");
                // }}
                disabled={false}
            >
                <View style={{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'purple',
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        Touchable Without Feedback
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>);
    }
}
