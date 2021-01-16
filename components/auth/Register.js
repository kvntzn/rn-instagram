import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
      </View>
    );
  }
}

export default Register;
