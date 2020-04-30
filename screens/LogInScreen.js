import React from "react";
import { Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import { Button} from 'react-native-elements';


export default function LogInScreen() {
  return(
      <View style={styles.container}>
        <Text style={styles.labels}>Email</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.labels}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.textInput}/>
        <Button
            titleStyle={{
                fontSize: 12,
            }}
            buttonStyle={styles.button}
            type='outline'
            onPress={() => Alert.alert('Hiello')}
            title='Log in'/>
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
    textInput: {
        marginBottom: 20,
        paddingTop: 4,
        paddingLeft: 10,
        width: '50%',
        height: 30,
        backgroundColor: '#ededed',
        borderRadius: 5
    },
    labels: {
        marginBottom: 5
    },
    button: {
        margin: 10,
        width: 70,
        height: 50,
        backgroundColor: 'white',
    }
})