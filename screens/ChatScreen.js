import React, {useContext, useEffect, useState} from "react";
import {AsyncStorage, ScrollView, StyleSheet, View, Image, Text} from 'react-native';
import Post from '../components/Post'
import {Context as AuthContext} from "../context/AuthContext";
import TextInput from "react-native-web/src/exports/TextInput";
import {Button} from "react-native-elements";
import Message from "../components/Message";


export default function ChatScreen({navigation, route}) {
    const {state, LogIn} = useContext(AuthContext)
    const [user, setUser] = useState({...route.params?.user})
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect( () =>{
         return navigation.addListener('focus', () => {
            getMessages();
        });

    }, [navigation])

    const sendMessage = async () => {
        const messageObj = {
            text: message,
            user: user._id
        }
        const token = await AsyncStorage.getItem('auth_token');
        fetch('http://68.183.113.49:8000/messages/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token
            },
            body: JSON.stringify(messageObj)
        })
            .then((res) => {
                if(res.ok){
                    console.log('sent');
                    setMessage('');
                }else{
                    console.log(res);
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const getMessages = async () =>{
        const token = await AsyncStorage.getItem('auth_token');
        setInterval( () =>{
            fetch('http://68.183.113.49:8000/messages/' +user._id, {
                headers: {
                    'Authorization' : token
                }})
                .then(res => res.json())
                .then(res => setMessages(res))
        }, 1000)
    }

    const renderMessages = () =>{
        if(messages){
            return messages.map((message) =>{
                return <Message message={message}/>
            })
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.labelname}>
                <Text>{user.name}</Text>
            </View>
            <ScrollView style={styles.messagesContainer}>
                {renderMessages()}
            </ScrollView>
                <TextInput onChangeText={(text) => setMessage(text)}
                           value={message} style={styles.textInputContainer}/>
            <View style={styles.actionContainer}>
                <Button onPress={() => setMessage('')} type='outline' buttonStyle={{marginLeft: 10, color: 'red'}} title='Cancel'/>
                <Button onPress={() => sendMessage()} type='outline' title='Apply'/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 30,
    },
    labelname: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 20
    },
    messagesContainer: {
        maxHeight: 400,
        width: '100%',
        flex:1,
    },
    textInputContainer: {
        borderWidth: 1, textAlignVertical: 'top', borderColor: '#F1F2EB', padding: 20, borderRadius: 5
    },
    actionContainer:{
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row-reverse'
    }
})
