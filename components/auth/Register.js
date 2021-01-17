import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "firebase";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const onSignUp = () => {
    console.log(email, password, name);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);

        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput placeholder="name" onChangeText={(name) => setname(name)} />
      <TextInput
        placeholder="email"
        onChangeText={(email) => setemail(email)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      />

      <Button title="Submit" onPress={onSignUp} />
    </View>
  );
};

export default Register;
