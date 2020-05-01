import React, {useState} from "react";
import {AsyncStorage, ScrollView, StyleSheet, TextInput} from 'react-native';
import {Button} from "react-native-elements";
import {View} from 'react-native';

export default function NewsFeedScreen({navigation}) {
    const [postText, setPostText] = useState('')


    const sendPostRequest = async () =>{
        const token = await AsyncStorage.getItem('auth_token');
        fetch('http://159.65.165.71:8000/posts/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token
            },
            body: JSON.stringify({text: postText})
        })
            .then((res) => {
                if(res.ok){
                    console.log('sent');
                    navigation.navigate('News feed');
                }else{
                    console.log(res);
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return(
        <ScrollView style={styles.container}>
            <TextInput
                multiline={true}
                style={{borderWidth: 1, textAlignVertical: 'top', borderColor: '#F1F2EB', padding: 10, borderRadius: 5
                }}
                numberOfLines={8}
                onChangeText={(text) => setPostText(text)}
                value={postText}/>

                <View style={styles.actionContainer}>
                    <Button onPress={() => setPostText('')} type='outline' buttonStyle={{marginLeft: 10, color: 'red'}} title='Cancel'/>
                    <Button onPress={() => sendPostRequest()} type='outline' title='Apply'/>
                </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 30
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