import React, {useEffect, useState} from "react";
import { Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import BottomTabNavigator from "../navigation/BottomTabNavigator";


export default function NewsFeedScreen() {
    const [posts, setPosts] = useState([]);


    useEffect(() =>{

    })

    fetchPosts = () =>{
        fetch('http://159.65.165.71:8000/posts')
            .then(res => res.json())
            .then(res => setPosts(res))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.labels}>Email</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labels: {
        marginBottom: 5
    }
})