import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
       <Text>Name:</Text>
      <TextInput style={styles.inputField} />
      <Text>Age:</Text>
      <TextInput style={styles.inputField} />
      <Text>Gender:</Text>
      <TextInput style={styles.inputField} />
      <Text>Username:</Text>
      <TextInput style={styles.inputField} />
      <Text>Email:</Text>
      <TextInput style={styles.inputField} />
      <Text>Password:</Text>
      <TextInput style={styles.inputField} />
      <TouchableOpacity color = 'white'>
        <Text> Sign up </Text> 
        {/* zasto ovde ne radi style za Text */}
      </TouchableOpacity>
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
  },
  buttonSignUp: {
    margin: 10,
    color: 'red'
  },
});
