import React from "react";
import { Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import BottomTabNavigator from "../navigation/BottomTabNavigator";


export default function UsersScreen() {
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