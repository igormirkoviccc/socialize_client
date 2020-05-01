import React, {useContext, useEffect, useState} from "react";
import { ScrollView , StyleSheet, AsyncStorage} from 'react-native';
import Post from '../components/Post'

import BottomTabNavigator from "../navigation/BottomTabNavigator";
import {Context as AuthContext} from "../context/AuthContext";


export default function NewsFeedScreen() {
    const {state, LogIn} = useContext(AuthContext)
    const [posts, setPosts] = useState([]);


    useEffect( () =>{
        fetchPosts();
    }, [])

    const fetchPosts = async () =>{
        const token = await AsyncStorage.getItem('auth_token');
        fetch('http://159.65.165.71:8000/posts', {
            headers: {
                "Authorization": token
            }
        })
            .then(res => res.json())
            .then(res => setPosts(res))
    }

    const renderContent = () =>{
        if(posts){
            return posts.map((post, index) =>{
                return <Post key={"_" + index} post={post}/>
            })
        }
    }

    return(
        <ScrollView style={styles.container}>
            {renderContent()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 30

    }
})