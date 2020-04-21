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

function AddModal( props, ref) {
    const [newFoodName, setNewFoodName] = useState('');
    const [newFoodDescription, setNewFoodDescription] = useState('');

    // create our ref
    const myModal = useRef();

    useImperativeHandle(ref, () => ({
        showAddModal() {
            myModal.current.open();
        }
    }));

    const generateKey = (numberOfCharacters) => {
        return randomStr({length: numberOfCharacters});
    }

    return (
        <Modal
            ref={ myModal }
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
                alert("Modal closed");
            }}
        >
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 40
            }}>
                New food's information
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
                onChangeText={(text) => setNewFoodName(text)}
                placeholder="Enter new food's name"
                value={newFoodName}
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

                onChangeText={(text) => setNewFoodDescription(text)}
                placeholder="Enter new food's description"
                value={newFoodDescription}
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
                    if (newFoodName.length === 0 || newFoodDescription.length === 0) {
                        alert("You must enter food's name and description");
                        return;
                    }
                    const newKey = generateKey(24);
                    const newFood = {
                        key: newKey,
                        name: newFoodName,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                        foodDescription: newFoodDescription
                    };
                    setNewFoodName('');
                    setNewFoodDescription('');
                    flatListData.push(newFood);
                    props.refreshFlatList(newKey);
                    myModal.current.close();
                }}>
                Save
            </Button>
        </Modal>
    )
}

export default forwardRef(AddModal);
