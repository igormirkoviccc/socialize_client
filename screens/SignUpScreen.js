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
      <Text>Name:</Text>
      <TextInput style={styles.inputField} onChangeText={(name) => setName(name)} />
      <Text>Age:</Text>
      <TextInput style={styles.inputField} onChangeText={(age) => setAge(age)} />
      <Text>Gender:</Text>
      <TextInput style={styles.inputField}
       onChangeText={(gender) => setGender(gender)} />
      <Text>Username:</Text>
      <TextInput style={styles.inputField} onChangeText={(username) => setUsername(username)} />
      <Text>Email:</Text>
      <TextInput style={styles.inputField} onChangeText={(email) => setEmail(email)} />
      <Text>Password:</Text>
      <TextInput style={styles.inputField} onChangeText={(password) => setPassword(password)} />
      <Button type="outline" title="Sign up" titleStyle={styles.buttonSignUp} onPress={() => sendUser({name, age, gender, username, email, password})}/>

      {/* zasto ovde ne radi style za Text */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5CCE8",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  inputField: {
    width: "60%",
    backgroundColor: "#ffe6e6",
    margin: 10,
    borderRadius: 5,
  },
  buttonSignUp: {
    color: "#6B2D5C",
  },
});
