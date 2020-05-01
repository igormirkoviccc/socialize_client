import * as React from 'react';
import {View, Text, StyleSheet} from "react-native";


export default function Post(props) {

    const formatDate = (date) =>{
        const dateTimeArray = date.split('T');
        const dateOfficial = dateTimeArray[0].split('-')
        const timeOfficial = dateTimeArray[1].substring(0,dateTimeArray[1].length-2);
        return `${dateOfficial[2]}/${dateOfficial[1]}/${dateOfficial[0]} - ${timeOfficial}:`
    }


    return (
        <View>
            <Text style={{color: 'black', fontSize: 12}}>{props.post.user.name}</Text>
            <Text style={{fontSize: 10, color: 'gray', marginBottom: 5}}>{formatDate(props.post.createdAt)}</Text>
            <Text style={{fontSize: 18, color: 'black', marginBottom: 2}}>{props.post.text}</Text>
            <Text style={{fontSize: 12, color: 'black', marginBottom: 20}}>Likes: {props.post.likes}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingTop: 50
    }
})
