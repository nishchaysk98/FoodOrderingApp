import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './components/Login';
import Signup from "./components/Signup";
import LoginSignup from "./components/LoginSignup";
import UserPage from "./components/UserPage";
import {Provider} from "react-redux";
import AddItemComponent from "./components/AddItem"
import { store } from "./store";
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <NativeRouter>
          <Route exact path="/" component={UserPage}/>
          <Route exact path="/add" component={AddItemComponent} />
        </NativeRouter>
      </View>
    </Provider>
  );
}