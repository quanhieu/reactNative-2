import React from 'react';
import { SectionList, Text, View, Platform } from 'react-native';
import { sectionListData } from '../data/sectionListData';

const SectionHeader = ({section}) => {
    return(
        <View style={{
            flex: 1,
            backgroundColor: 'rgb(77,120, 140)',
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                margin: 20
            }}>
                {section.title}
            </Text>
        </View>
    )
}

const SectionListItem = ({item, index}) => {
    return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'rgb(98, 197, 184)'
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(173, 252, 250)',
                marginLeft: 20,
                marginRight: 10,

            }}> {item.name}
            </Text>

            <Text style={{
                fontSize: 16,
                marginLeft: 20,
                marginRight: 10,
                color: 'rgb(173, 252, 250)',
            }}> {item.description}
            </Text>

            <View style={{backgroundColor: 'rgb(77,120, 140)', height: 1, margin: 4, marginLeft: 20,marginRight: 10}} />
        </View>
    )
}

export default function BasicSectionList() {
    return (
        <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
            <SectionList
                renderItem={({ item, index }) => {
                    return(
                        <SectionListItem item={item} index={index}>

                        </SectionListItem>
                    );
                }}
                renderSectionHeader= {({ section }) => {
                    return(
                        <SectionHeader
                            section={section}
                        />
                    )
                }}
                sections={sectionListData}
                keyExtractor={(item, index) => item.name}
            />
        </View>
    );
}
