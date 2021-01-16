import { StatusBar } from "expo-status-bar";
import React from "react";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM9jR3lzsS5TvwQyFsLCV-WSblDsUOFqI",
  authDomain: "ig-test-84875.firebaseapp.com",
  projectId: "ig-test-84875",
  storageBucket: "ig-test-84875.appspot.com",
  messagingSenderId: "998350961812",
  appId: "1:998350961812:web:dbcee2d980e94a0869c881",
};

//firebase setup
if(firebase.default.apps.length == 0){
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex: 1, marginTop: 30}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </>
  );
}
