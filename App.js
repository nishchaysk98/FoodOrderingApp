import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './components/Login';
import Signup from "./components/Signup";
import LoginSignup from "./components/LoginSignup";
import FoodList from "./components/FoodList";
import {Provider} from "react-redux";
import AddItemComponent from "./components/AddItem"
import { store } from "./store";
import { NativeRouter, Route, Link } from "react-router-native";
import RestaurantList from "./components/RestaurantList";
import RestaurantAddFood from "./components/RestaurantAddFood";
// import Navigator from "./ScreenStack";

export default function App() {
  
  return (
    <Provider store={store}>
        <View style={{ alignItems:"center" ,backgroundColor:"orange"}}><Text style={{fontWeight:"bold",padding:30}}>Food Ordering App</Text></View>
        <NativeRouter>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/restaurantlist" component={RestaurantList} />
          <Route exact path="/foodlist" component={FoodList}/>
          <Route exact path="/add" component={AddItemComponent}/>
          <Route exact path="/restaurantaddfood" component={RestaurantAddFood}/>
          
        </NativeRouter>
    </Provider>
  );
}