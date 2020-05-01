import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignUpScreen() {
  const {state, SignUp} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.inputField} onChangeText={setName} />
      <Text>Age:</Text>
      <TextInput style={styles.inputField} onChangeText={setAge} />
      <Text>Gender:</Text>
      <TextInput style={styles.inputField} onChangeText={setGender} />
      <Text>Username:</Text>
      <TextInput style={styles.inputField} onChangeText={setUsername} />
      <Text>Email:</Text>
      <TextInput style={styles.inputField} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput style={styles.inputField} onChangeText={setPassword} />
      <Button type="outline" title="Sign up" titleStyle={styles.buttonSignUp} onPress={() => SignUp({name, age, gender, username, email, password})}/>

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
