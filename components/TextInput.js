import React, {Component} from 'react';
import {TextInput, View, Text, Keyboard} from 'react-native';

export default class TestTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typedPassword: '',
            typedDescription: '',
        };
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                this.setState(() => {
                    return {typedText: 'Keyboard is shown'};
                });
            },
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                this.setState(() => {
                    return {typedText: 'Keyboard Hide'};
                });
            },
        );

    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    placeholderTextColor="red"
                    onChangeText={text => {
                        // this.state =
                        this.setState(() => {
                            return {
                                typedText: text,
                            };
                        });
                    }}
                />
                <Text style={{marginLeft: 20}}>{this.state.typedText}</Text>
                <TextInput
                    style={{
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    keyboardType="default"
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    autoFocus={true}
                    onChangeText={text => {
                        this.setState(() => {
                            return {
                                typedPassword: text,
                            };
                        });
                    }}
                />

                <TextInput
                    style={{
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    multiline = {true}
                    numberOfLines = {4}
                    borderBottomColor="green"
                    borderBottomWidth={3}
                    borderLeftColor="green"
                    borderLeftWidth={3}
                    borderRightColor="green"
                    borderRightWidth={3}
                    borderTopColor="red"
                    editable={true}
                    returnKeyType="done"
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={text => {
                        this.setState(() => {
                            return {
                                typedDescription: text,
                            };
                        });
                    }}
                />
            </View>
        );
    }
}
