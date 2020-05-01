import * as React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Post(props) {

    const formatDate = (date) =>{
        const dateTimeArray = date.split('T');
        const dateOfficial = dateTimeArray[0].split('-')
        const timeOfficial = dateTimeArray[1].substring(0,dateTimeArray[1].length-2);
        return `${dateOfficial[2]}/${dateOfficial[1]}/${dateOfficial[0]} - ${timeOfficial}:`
    }


    return (
        <View style={styles.container}>
            <View style={{width: 150}}>
            <Text style={{color: 'black', fontSize: 12}}>{props.post.user.name}</Text>
            <Text style={{fontSize: 10, color: 'gray'}}>{formatDate(props.post.createdAt)}</Text>
            <Text style={{fontSize: 18, color: 'black', marginBottom: 2}}>{props.post.text}</Text>
            <Text style={{fontSize: 10, color: 'black'}}>{props.post.likes} hearts</Text>
            </View>
            <View style={{width: 20}}>
                <Icon name="heart" size={20} color="#900" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F2EB',
        borderRadius: 5,
        marginBottom: 10,
        padding: 5,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
