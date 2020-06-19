import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignUpScreen({navigation}) {
  const {state, SignUp} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  const sendUser = async () => {
      const userObj = {
          name: name,
          age: age,
          gender: gender,
          password: password,
          email: email
      }
     
      fetch('http://68.183.113.49:8000/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
             
          },
          body: JSON.stringify(userObj)
      })
          .then((res) => {
              if(res.ok){
                console.log(res)
                navigation.navigate('LogIn');
                  console.log("SUCCESS");
              }else{
                  console.log(res);
              }
          })
          .catch((e) => {
              console.log(e)
          })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.inputField} onChangeText={setName} />
      <Text style={styles.label}>Age:</Text>
      <TextInput style={styles.inputField} onChangeText={setAge} />
      <Text style={styles.label}>Gender:</Text>
      <TextInput style={styles.inputField} onChangeText={setGender} />
      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.inputField} onChangeText={setUsername} />
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.inputField} onChangeText={setEmail} />
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.inputField} onChangeText={setPassword} />
      <Button type="outline" title="Sign up" titleStyle={styles.buttonSignUp} onPress={() => sendUser({name, age, gender, username, email, password})}/>

      {/* zasto ovde ne radi style za Text */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#4a676c',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  inputField: {
    width: "60%",
    backgroundColor: "#bbced1",
    margin: 10,
    borderRadius: 5,
  },
  buttonSignUp: {
    color: "#bbced1",
  },
  label:{
    color:'#bbced1'
  },
});
