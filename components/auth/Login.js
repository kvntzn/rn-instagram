import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "firebase";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="email"
        onChangeText={(email) => setemail(email)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      />

      <Button title="Sign in" onPress={onLogin} />
    </View>
  );
};

export default Login;
