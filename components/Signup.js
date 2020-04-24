import React from "react";
import {View, Picker, Text, TextInput, Animated, Button} from "react-native";

class Login extends React.Component{
  constructor(){
    super();
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
onSubmit = () =>{
  alert("EndUser: "+ this.state.endUser+"; Username: "+this.state.username+"; Password: "+this.state.password +"; Email: "+this.state.email+"; Name :"+this.state.name+"; Phonenumber :"+this.state.phonenumber);
}

render(){

  if(this.state.endUser == "User"){

    return (    
    <View style={{ flexDirection:"column"}}>
          
          <View style={{justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
            <Picker onValueChange={this.onEndUserChange} selectedValue={this.state.endUser} style={{width:"35%", margin:"auto", marginTop:"15px", padding:"2px", border:"1px solid #3298E0", borderRadius:"2px"}}>
              <Picker.Item label="Restaurant" value="Restaurant"/>
              <Picker.Item label="User" value="User" />
            </Picker>


            <View style={{width:"50%"}}>
            <Text style={{fontSize:"10px", marginTop:"20px", marginBottom:"5px"}}>Username</Text>
            <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px",outline:"none"}} onChangeText={this.onUsernameChange} value={this.state.username}/>
            </View>


            <View style={{width:"50%"}}>
            <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Email</Text>
            <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} onChangeText={this.onEmailChange} value={this.state.email}/>
            </View>


            <View style={{width:"50%"}}>
            <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Set Password</Text>
            <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} secureTextEntry={true} onChangeText={this.onPasswordChange} value={this.state.password}/>
            </View>

            <View style={{width:"25%", marginTop:"10px"}}>
              <Button title="Submit" style={{background:"#3298E0"}} onPress={this.onSubmit} />
            </View>
          </View>
    </View>
  )
  }
  else if(this.state.endUser == "Restaurant"){
    return (
    <View style={{ flexDirection:"column"}}>
          
          <View style={{justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
            <Picker onValueChange={this.onEndUserChange} selectedValue={this.state.endUser} style={{width:"35%", margin:"auto", marginTop:"15px", padding:"2px", border:"1px solid #3298E0", borderRadius:"2px"}}>
              <Picker.Item label="Restaurant" value="Restaurant"/>
              <Picker.Item label="User" value="User" />
            </Picker>

            <View style={{width:"50%"}}>
              <Text style={{fontSize:"10px", marginTop:"20px", marginBottom:"5px"}}>Name</Text>
              <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} onChangeText={this.onNameChange} value={this.state.name}/>
            </View>


            <View style={{width:"50%"}}>
              <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Username</Text>
              <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px",outline:"none"}} onChangeText={this.onUsernameChange} value={this.state.username}/>
            </View>


            <View style={{width:"50%"}}>
              <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Email</Text>
              <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} onChangeText={this.onEmailChange} value={this.state.email}/>
            </View>


            <View style={{width:"50%"}}>
              <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Set Password</Text>
              <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} onChangeText={this.onPasswordChange} secureTextEntry={true} value={this.state.password}/>
            </View>


            <View style={{width:"50%"}}>
              <Text style={{fontSize:"10px", marginTop:"10px", marginBottom:"5px"}}>Phone Number</Text>
              <TextInput style={{padding:"5px",margin:"auto", border:"1px solid #3298E0", borderRadius:"4px", outline:"none"}} onChangeText={this.onPhonenumberChange} value={this.state.phonenumber}/>
            </View>
            
            <View style={{width:"25%", marginTop:"10px"}}>
              <Button title="Submit" style={{background:"#3298E0"}} onPress={this.onSubmit}/>
            </View>
          </View>
    </View>
  )
  }
}
  
}

export default Login;