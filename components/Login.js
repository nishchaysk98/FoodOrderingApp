import React from "react";
import {View, Picker, Text, TextInput, Animated, Button, StyleSheet} from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";
import Signup from "./Signup";
import axios from "axios";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.url = "http://192.168.43.195:8080";
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
  onLoginSuccess = (link, uid) => {
    this.props.history.push({
      pathname : link,
      state:{ 
        url : this.url,
        userid : uid
       }
    });
  }
  onRestLoginSuccess = (id)=>{

    this.props.history.push({
      pathname: "/restaurantaddfood",
      state: {
        url : this.url,
        rid: id
      } 
    })
  }
  onSubmit = () =>{

  var api=this.url+"/"+(this.state.endUser).toLowerCase()+'/login';
  
  axios.post(api,{
    username:this.state.username,
    password:this.state.password
  })
  .then((json) => {
    console.log(json.data.length)
    if(json.data.length!=0){
      
      if(this.state.endUser.toLowerCase() == "user"){
        alert("Login succesfull:)" + json.data.id)
        this.onLoginSuccess("/restaurantlist", json.data.id);
        
      }
      else{
        this.onRestLoginSuccess(json.data.id);
      }
    }
    else{
      alert("Login failed:(")
    }
  })
  .catch((error) => {
    alert(error)
  });
}

render(){
  return (    
    <View style={styles.style_4}> 
      <View style={styles.style_5}>
        <Text style={{fontWeight:"bold", margin:20}}>Login</Text>
        <Link to={{pathname:"/signup",state:{url: this.url}}} style={{margin:20}}>
          <Text>Signup</Text>
        </Link>
      </View>
      <View style={styles.style_3}>
        <View style={{alignItems:"center"}}>
        <Picker style={{width:'50%'}} onValueChange={this.onEndUserChange} selectedValue={this.state.endUser} >
          <Picker.Item label="Restaurant" value="Restaurant"/>
          <Picker.Item label="User" value="User" />
        </Picker>
        </View>
        <View >
        <Text style={styles.style_1}>Username</Text>
        <TextInput style={styles.style_2} onChangeText={this.onUsernameChange}/>
        </View>
        <View >
        <Text style={styles.style_1}>Password</Text>
        <TextInput style={styles.style_2} onChangeText={this.onPasswordChange} secureTextEntry={true}/>
        </View>
        <View style={styles.style_1}>
          <Button title="Login" onPress={this.onSubmit}/>
        </View>
      </View>
    </View>
    
  )
}
}

const styles = StyleSheet.create({
  style_1 : {
    width: '100%',
    marginTop: 10
  },
  style_2 : {
    width:'100%',
    backgroundColor:"lightgrey", 
    marginTop:10
  },
  style_3 : {
    width:'80%', 
    textAlign:"center"
  },
  style_4:{
    alignItems:"center", 
    width:'100%'
  },
  style_5 : {
    padding:20, 
    textAlign:"center", 
    alignItems:"center", 
    flexDirection:"row"
  }
})


export default Login;