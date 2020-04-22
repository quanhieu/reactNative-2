import React, { useState, useRef, useCallback, useEffect, useImperativeHandle } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, Button } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import ButtonAdd from '../assets/images/icons-add.png';
import AddModal from './AddModal';
import EditModal from './EditModal';
import Weather from './HorizontalFlatList';


const FlatListItem = ({item, index, refreshFlatList, openEdit}) => {
    const [activeRowKey, setActiveRowKey] = useState(null);
    const [foodItem, setFoodItem] = useState({});

    const load = useCallback(() => {
        setFoodItem(item);
    } , [setFoodItem])

    useEffect(() => {
        setFoodItem(item);
    }, [setFoodItem])

    const swipeSettings = {
        autoClose: true,
        // swipe right to left
        onClose: (secId, rowId, direction) => {
            if(!activeRowKey === null) {
                setActiveRowKey(null)
            }
        },
        // swipe left to right
        onOpen: (secId, rowId, direction) => {
            setActiveRowKey(foodItem.key)
        },
        // setting button on right
        right: [
            {
                onPress: () => {
                    openEdit(foodItem);
                },
                text: 'Edit',
                type: 'primary'
            },
            {
                onPress: () => {
                    Alert.alert(
                        'Alert',
                        'Are you sure want to delete ?',
                        [
                            {
                                text: 'No',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel'
                            },
                            {
                                text: 'Yes',
                                onPress: () => {
                                    flatListData.splice(index, 1);
                                    //Refresh FlatList !
                                    refreshFlatList(activeRowKey);
                                }
                            }
                        ],
                        { cancelable: true }
                    )
                },
                text: 'Delete',
                type: 'delete'
            }
        ],
        rowId: index,
        sectionId: 1
    };

    return (
        <Swipeout {...swipeSettings}>
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'mediumseagreen',
                    // backgroundColor: index % 2 === 0 ? 'mediumseagreen': 'tomato'
                }}>
                    <Image
                        source={{ uri: foodItem.imageUrl }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                        <Text style={styles.flatListItem}>{foodItem.name}</Text>
                        <Text style={styles.flatListItem}>{foodItem.foodDescription}</Text>
                    </View>
                </View>

                <View style={{
                    height: 1,
                    backgroundColor:'white'
                }}>
                </View>
            </View>
        </Swipeout>
    )
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
})

export default function BasicFlatList() {
    const [deletedRowKey, setDeletedRowKey] = useState(null);
    const [show, setShow] = useState(true)

    // create our ref
    const addModal = useRef();
    const editModal = useRef();
    const flatList = useRef();

    function refreshFlatList(activatedKey) {
        setDeletedRowKey(activatedKey);
        // scroll flatlist to end
        flatList.current.scrollToEnd();
    }

    function _onPressAdd () {
        addModal.current.showAddModal();
    }

    function _onPressOpenEdit(foodItem) {
        editModal.current.showEditModal(foodItem);
    }

    function hdSaveEdit(index, foodItemData) {
        // editModal.current.saveEditModal(setFoodItem, foodItem);
        flatListData.splice(index, 1, foodItemData);
        setDeletedRowKey(Math.random());
    }

    function hdWeather() {
        setShow(false);
    }

    return (
        <>
            {
                show
                ? <View style={{ flex:1 , marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                    <View style={{
                        backgroundColor: 'tomato',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        alignItems: 'center',
                        height: 55
                    }}>
                        <TouchableHighlight
                            style={{marginRight: 10}}
                            underlayColor='tomato'
                            onPress={_onPressAdd}
                        >
                            <Image
                                style={{width: 35, height: 35}}
                                source={ButtonAdd}
                            />
                        </TouchableHighlight>
                        <Button
                            title="Weather"
                            onPress={hdWeather}
                        />
                    </View>
                    <FlatList
                        ref={ flatList }
                        data={flatListData}
                        renderItem={({item, index}) => {
                            // console.log(`Item = ${JSON.stringify(item)}, Index = ${index}`)
                            return (
                                <FlatListItem
                                    item={item}
                                    index={index}
                                    refreshFlatList={refreshFlatList}
                                    openEdit={_onPressOpenEdit}
                                >
                                </FlatListItem>
                            )
                        }}
                    >
                    </FlatList>

                    <AddModal
                        ref={ addModal }
                        refreshFlatList={refreshFlatList}
                    />

                    <EditModal
                        ref={ editModal }
                        hdSaveEdit={hdSaveEdit}
                    />
                </View>
                : <Weather/>
            }
        </>
    );
}
