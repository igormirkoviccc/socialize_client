import * as React from 'react';
import {View, Text, StyleSheet} from "react-native";


export default function Post(props) {
    return (
        <View>
            <Text>{props.post.text}</Text>
            <Text>{props.post.createdAt}</Text>
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
