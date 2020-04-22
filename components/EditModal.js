import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
    Text, Alert,
    Platform, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import randomStr from 'random-string';
import flatListData from '../data/flatListData';

const screen = Dimensions.get('window');

function EditModal( props, ref ) {
    const [editFoodName, setEditFoodName] = useState('');
    const [editFoodDescription, setEditFoodDescription] = useState('');
    const [key, setKey] = useState('');
    const [foodItem, setFoodItem] = useState({})

    // create our ref
    const editMyModal = useRef();

    useImperativeHandle(ref, () => ({
        showEditModal(foodItem) {
            setEditFoodName(foodItem.name);
            setEditFoodDescription(foodItem.foodDescription);
            setKey(foodItem.key);

            setFoodItem({
                key: foodItem.key,
                name: editFoodName,
                imageUrl: foodItem.imageUrl,
                foodDescription: editFoodDescription
            });

            editMyModal.current.open();
        }
    }));


    return (
        <Modal
            ref={ editMyModal }
            style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'ios' ? 30 : 0,
                shadowRadius: 10,
                width: screen.width - 80,
                height: 280
            }}
            position='center'
            backdrop={true}
            onClosed={() => {
                // alert("Modal closed");
                setEditFoodName('');
                setEditFoodDescription('');
                setKey('');
            }}
        >
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 40
            }}>
                Editting food's information
            </Text>
            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                onChangeText={(text) => setEditFoodName(text)}
                placeholder="Update food's name"
                value={editFoodName}
            />
            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 10,
                    marginBottom: 20,
                    borderBottomWidth: 1
                }}

                onChangeText={(text) => setEditFoodDescription(text)}
                placeholder="Update food's description"
                value={editFoodDescription}
            />
            <Button
                style={{ fontSize: 18, color: 'white' }}
                containerStyle={{
                    padding: 8,
                    marginLeft: 70,
                    marginRight: 70,
                    height: 40,
                    borderRadius: 6,
                    backgroundColor: 'mediumseagreen'
                }}
                onPress={() => {
                    if (editFoodName.length === 0 || editFoodDescription.length === 0) {
                        alert("You must enter food's name and description");
                        return;
                    }
                    // update existing food
                    let foundIndex = flatListData.findIndex(item => key === item.key)
                    if(foundIndex === -1) {
                        return; // not found
                    }

                    flatListData[foundIndex].name = editFoodName;
                    flatListData[foundIndex].foodDescription = editFoodDescription;
                    editMyModal.current.close();

                    props.hdSaveEdit(foundIndex, {
                        name: editFoodName,
                        foodDescription: editFoodDescription,
                        ...foodItem
                    });

                    setEditFoodName('');
                    setEditFoodDescription('');
                    setKey('');
                }}>
                Save
            </Button>
        </Modal>
    )
}

export default forwardRef(EditModal);
