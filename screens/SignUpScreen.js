import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignUpScreen({ navigation }) {
  const { state, SignUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState();

  

  const sendUser = async () => {
    const userObj = {
      name: name,
      age: age,
      gender: gender,
      password: password,
      email: email,
    };
    fetch("http://68.183.113.49:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then(async (res) => {
        if (res.status == 400) {
          return res.json();
          
        }
        if (res.ok) {
          console.log(res);
          navigation.navigate("LogIn");
          console.log("SUCCESS");
        } else {
          console.log(res);
        }
      })
      .then((res) =>{
        if(res && res.errors && res.errors.email){
          setError("Wrong email format")
        }
        if(res && res.errors && res.errors.age){
          setError("Age wrong format")
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
      <Button
        type="outline"
        title="Sign up"
        titleStyle={[styles.buttonSignUp]}
        onPress={() => sendUser({ name, age, gender, username, email, password })}
      />
      {error ? (
        <Text style={{color: 'red',
        fontSize: 10}}>{error}</Text>
      ) : null}
      {/* zasto ovde ne radi style za Text */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#4a676c",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  inputField: {
    borderColor: "#F1F2EB",
    width: "60%",
    backgroundColor: "#bbced1",
    margin: 10,
    borderRadius: 5,
    borderRadius: 5,
    backgroundColor: "#bbced1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  buttonSignUp: {
    width: 70,
    height: 50,
    backgroundColor: "#132c30",
    fontWeight: "bold",
    fontSize: 12,
  },
  label: {
    color: "#bbced1",
  },
});
