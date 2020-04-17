import React, {Component} from 'react';
import IMG1 from '../assets/images/img1.jpg';
import {
    ScrollView,
    Image, Text, View, TextInput,
    Dimensions,
} from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                maximumZoomScale={3}
                minimumZoomScale={0.2}
                keyboardDismissMode='on-drag'
            >
                <Image
                    source={IMG1}
                    style={{width: screenWidth, height: screenWidth * 600 / 678, marginTop: 20}}
                >
                </Image>
                <Text
                    style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'green',
                    }}
                >
                    This is a text
                </Text>
                <TextInput
                    style={{padding: 10, margin: 10, borderWidth: 1}}
                    placeholder='Enter text'>
                </TextInput>
                <View style={{backgroundColor: '#a03b51', height: 50}}>
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        Text inside a View
                    </Text>
                </View>
                <Image
                    source={IMG1}
                    style={{width: screenWidth, height: screenWidth / 1.33, marginTop: 20}}
                />
                <Image
                    source={IMG1}
                    style={{width: screenWidth, height: screenWidth / 1.33, marginTop: 20}}
                />
                <Image
                    source={IMG1}
                    style={{width: screenWidth, height: screenWidth / 1.33, marginTop: 20}}
                />
                <Image
                    source={IMG1}
                    style={{width: screenWidth, height: screenWidth / 1.33, marginTop: 20}}
                />
                <Image
                    source={IMG1}
                    style={{width: screenWidth, marginTop: 20}}
                />
            </ScrollView>
        );
    }
}
