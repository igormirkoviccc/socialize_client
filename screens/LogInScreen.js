import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from "../context/AuthContext";



export default function LogInScreen() {
    const {state, LogIn} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);


  return(
      <View style={styles.container}>
          <Text style={styles.labels}>Email</Text>
        <TextInput
            onChangeText={setEmail}
            style={styles.textInput}/>
        <Text style={styles.labels}>Password</Text>
        <TextInput
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textInput}/>
        <Button
            titleStyle={{
                fontSize: 12,
            }}
            buttonStyle={styles.button}
            type='outline'
            onPress={() => LogIn({email, password})}
            title='Log in'/>
          {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : null}
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
        justifyContent: 'flex-start',
        paddingTop: 50
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
    },
    error: {
        color: 'red'
    }
})