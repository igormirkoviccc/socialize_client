import React, {useContext, useEffect, useState} from "react";
import {AsyncStorage, ScrollView, StyleSheet, View, Image, Text} from 'react-native';
import Post from '../components/Post'
import {Context as AuthContext} from "../context/AuthContext";


export default function NewsFeedScreen({navigation}) {
  const {state, LogIn} = useContext(AuthContext)
  const [user, setUser] = useState([]);


  useEffect( () =>{
    return navigation.addListener('focus', () => {
      fetchUserData();
    });

  }, [navigation])

  const fetchUserData = async () =>{
    const token = await AsyncStorage.getItem('auth_token');
    fetch('http://68.183.113.49:8000/users/me', {
      headers: {
        "Authorization": token
      }
    })
        .then(res => res.json())
        .then(res => setUser(res))
  }

  const renderPosts = () =>{
    if(user && user.posts)
      if(user.posts.length !== 0)
      return user.posts.reverse().map((post, index) =>{
        return <Post post={post} self={true} key={"_"+index}/>
      })
    else
      return <Text style={{color: 'rgba(0,0,0,0.2)', fontSize: 35, marginTop: 30}}>Empty. Make your first post</Text>
  }

  return(
      <ScrollView style={styles.container}>
          <View >
            <Image style={{width: 200, height: 200, marginBottom: 30}} source={user.img}/>
          </View>
          <View style={{width: 250}}>
            <Text>Name:  {user.name}</Text>
            <Text>Email:  {user.email}</Text>
            <Text>Age:  {user.age}</Text>
            <Text>Gender:  {user.gender}</Text>
            <Text style={{marginTop: 30, fontSize: 20}}>Posts: </Text>
            {renderPosts()}
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
    
  }
})
