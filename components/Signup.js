import React from "react";
import {View, Picker, Text, TextInput, Animated, Button, StyleSheet} from "react-native";
// import firebase from 'react-native-firebase';
import axios from "axios";
import {NativeRouter, Route, Link} from "react-router-native";

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.url = this.props.location.state.url;
    this.state = {
      endUser : "User",
      username : "",
      password : "",
      email : "",
      phonenumber: "",
      name : ""
    }
  }
 

onEndUserChange = (val) => {
  this.setState({
    endUser : val,
    username : "",
    password : "",
    email : "",
    phonenumber: "",
    name : ""
  })

}
onUsernameChange = (val) =>{
  this.setState({
    username : val
  })
}
onPasswordChange = (val) =>{
  this.setState({
    password: val
  })
}
onEmailChange =(val) => {
  this.setState({
    email : val
  })
}
onPhonenumberChange =(val) =>{
  this.setState({
    phonenumber : val
  })
}
onNameChange =(val)=>{
  this.setState({
    name : val
  })
}

onSignupSuccess = () => {
  this.props.history.push("/")
}

onSubmit = () =>{
  console.log("EndUser: "+ this.state.endUser+"; Username: "+this.state.username+"; Password: "+this.state.password +"; Email: "+this.state.email+"; Name :"+this.state.name+"; Phonenumber :"+this.state.phonenumber);
  
  var api=this.url+"/"+(this.state.endUser).toLowerCase()+'/signup';
  if((this.state.endUser).toLowerCase()=="user"){
    axios.post(api,{
      username:this.state.username,
      password:this.state.password,
      name:this.state.name,
      email:this.state.email,
      picture:""
    })
    .then((response) => {

      console.log(response.data)
      if(response.data==1){
        alert("Signup success")
      }
      else{
        alert("Failed")
      }
      
    })
    .catch((error) => {
      alert(error)
    });
  }
  else{
    axios.post(api,{
      username:this.state.username,
      password:this.state.password,
      name:this.state.name,
      email:this.state.email,
      picture:"",
      location:""
    })
    .then((response) => {

      console.log(response.data)
      if(response.data==1){
        alert("Signup success")
        this.onSignupSuccess();
      }
      else{
        alert("Failed")
      }
      
    })
    .catch((error) => {
      alert(error)
    });
  }
}

render(){

  if(this.state.endUser == "User"){

    return (    
      <View style={styles.style_4}>
      
      <View style={styles.style_5}>
        <Link to="/" style={{margin:20}}>
        <Text >Login</Text>
        </Link>
        <Text style={{fontWeight:"bold", margin:20}}>Signup</Text>
      </View>

      <View style={styles.style_3}>
        <View style={{alignItems:"center"}}>
        <Picker style={{width:'50%'}} onValueChange={this.onEndUserChange} selectedValue={this.state.endUser}>
          <Picker.Item label="Restaurant" value="Restaurant"/>
          <Picker.Item label="User" value="User" />
        </Picker>
        </View>

        <View >
        <Text style={styles.style_1}>Name</Text>
        <TextInput style={styles.style_2} onChangeText={this.onNameChange} value={this.state.name}/>
        </View>
        <View >
        <Text style={styles.style_1}>Username</Text>
        <TextInput style={styles.style_2} onChangeText={this.onUsernameChange} value={this.state.username}/>
        </View>

        <View >
        <Text style={styles.style_1} >Email</Text>
        <TextInput style={styles.style_2} onChangeText={this.onEmailChange} value={this.state.email}/>
        </View>

        <View >
        <Text style={styles.style_1} >Set Password</Text>
        <TextInput style={styles.style_2} secureTextEntry={true} onChangeText={this.onPasswordChange} value={this.state.password}/>
        </View>

        <View style={styles.style_1}>
          <Button title="Signup"  onPress={this.onSubmit} />
        </View>
      </View>
</View>
  )
  }
  else if(this.state.endUser == "Restaurant"){
    return (
      <View style={styles.style_4}>
          
      <View style={styles.style_5}>
        <Link to="/" style={{margin:20}}>
        <Text >Login</Text>
        </Link>
        <Text style={{fontWeight:"bold", margin:20}}>Signup</Text>
      </View>

      <View style={styles.style_3}>

        <View style={{alignItems:"center"}}>
        <Picker style={{width:'50%'}} onValueChange={this.onEndUserChange} selectedValue={this.state.endUser}>
          <Picker.Item label="Restaurant" value="Restaurant"/>
          <Picker.Item label="User" value="User" />
        </Picker>
        </View>

        <View>
          <Text style={styles.style_1} >Name</Text>
          <TextInput style={styles.style_2} onChangeText={this.onNameChange} value={this.state.name}/>
        </View>


        <View>
          <Text style={styles.style_1}>Username</Text>
          <TextInput style={styles.style_2} onChangeText={this.onUsernameChange} value={this.state.username}/>
        </View>


        <View >
          <Text style={styles.style_1} >Email</Text>
          <TextInput style={styles.style_2} onChangeText={this.onEmailChange} value={this.state.email}/>
        </View>


        <View >
          <Text style={styles.style_1} >Set Password</Text>
          <TextInput style={styles.style_2} onChangeText={this.onPasswordChange} secureTextEntry={true} value={this.state.password}/>
        </View>


        <View >
          <Text style={styles.style_1}>Phone Number</Text>
          <TextInput style={styles.style_2} onChangeText={this.onPhonenumberChange} value={this.state.phonenumber}/>
        </View>
        
        <View style={styles.style_1}>
          <Button title="Signup" onPress={this.onSubmit}/>
        </View>
      </View>
</View>
  )
  }
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

export default Signup;