import React from 'react';
import {
    FlatList, Text, View, Image,
    Platform, TouchableOpacity
} from 'react-native';

import { horizontalStatus, horizontalFlatListData } from '../data/horizontalFlatListData';
import bgImage from '../assets/images/weather.jpg';

import Icon from 'react-native-vector-icons/Ionicons';

const HorizontalFlatListItem = (props) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                width: 90,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
                margin: 4,
            }}>
            <TouchableOpacity onPress={() => {
                alert(`You pressed: ${props.item.hour}`);
            }}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
            </TouchableOpacity>
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                margin: 20
            }}>{props.item.hour}</Text>
            <Icon name={(Platform.OS === 'ios') ? props.item.status.ios : props.item.status.android}
                size={30}
                color='white'
            />
            <Text style={{
                fontSize: 16,
                margin: 10,
                color: 'white',
            }}>{props.item.degrees} ℉</Text>
        </View>
    );
}

export default function HorizontalFlatList() {

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: Platform.OS === 'ios' ? 34 : 0
            }}>
            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}>
                <Image style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: null,
                    height: null,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                }}
                    source={bgImage}
                >
                </Image>
            </View>

            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'transparent',
                margin: 10,
            }}>Weather forecast
            </Text>

            <View style={{ height: 150 }}>
                <FlatList
                    style={{
                        backgroundColor: 'black',
                        opacity: 0.5,
                    }}
                    horizontal={true}
                    data={horizontalFlatListData}
                    renderItem={({ item, index }) => {
                        return (
                            <HorizontalFlatListItem item={item} index={index}>

                            </HorizontalFlatListItem>);
                    }}
                    keyExtractor={(item, index) => item.hour}
                >
                </FlatList>
            </View>
        </View>
    )
}
