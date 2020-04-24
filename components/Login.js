import React from "react";
import {View, Picker, Text, TextInput, Animated, Button} from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";
import Signup from "./Signup";

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      endUser : "User",
      username : "",
      password : "",
    }
  }

onEndUserChange = (evt) => {
  this.setState({
    endUser : evt
  })
}

onUsernameChange = (evt) =>{
  this.setState({
    username : evt
  })
}
onPasswordChange = (evt) =>{
  this.setState({
    password: evt
  })
}
onSubmit = () =>{

    fetch('https://reqres.in/api/unknown/2')
    .then((response) => response.json())
    .then((json) => {
      alert(json) ;
    })
    .catch((error) => {
      alert(error)
    });
}

render(){
  return (    
    <View style={{ flexDirection:"column"}}>
          
          <View style={{justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
            <Picker onValueChange={this.onEndUserChange} selectedValue={this.state.endUser} style={{width:"35%", margin:"auto", marginTop:"15px", padding:"2px", border:"1px solid #3298E0", borderRadius:"2px"}}>
              <Picker.Item label="Restaurant" value="Restaurant"/>
              <Picker.Item label="User" value="User" />
            </Picker>

            <View style={{width:"50%"}}>
            <Text style={{fontSize:"10px", marginTop:"20px", marginBottom:"5px"}}>Username</Text>
            <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px",outline:"none"}} onChangeText={this.onUsernameChange}/>
            </View>


            <View style={{width:"50%"}}>
            <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Password</Text>
            <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} onChangeText={this.onPasswordChange} secureTextEntry={true}/>
            </View>


            <View style={{width:"25%", marginTop:"10px"}}>
              <Button title="Submit" style={{background:"#3298E0"}} onPress={this.onSubmit}/>
            </View>
          </View>
    </View>
  )
}
  
}

export default Login;