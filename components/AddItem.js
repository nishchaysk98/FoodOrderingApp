import React from "react";
import {View, Button,Text} from "react-native";
import {store} from "../store";
import {AddItem} from "./Add/AddActionCreators";
import {connect} from "react-redux";
import {CheckBox} from "react-native";
import {Link} from "react-router-native";

class AddItemComponent extends React.Component{

  constructor(props){
    super(props);
    this.url = this.props.location.state.url
    this.userid = this.props.location.state.userid
    this.rid = this.props.location.state.rid
    
    this.state = {
      itemdetails : this.props.location.state.itemdetails,
      checkboxvalues : [],
      radiovalues : null,
      price : this.props.location.state.itemdetails.price,
      quantity : 1
    }
    this.flag = false
    this.fixedprice = this.props.location.state.itemdetails.price
  }
  
  // buttonClicked = () =>{
  //   store.dispatch(AddItem())
  // }

  checkboxclicked = () => {
    
  }

  radioclicked = () => {

  }

  addItemClicked = (id) => {

    const objToSend = {"foodid":id, "addOnQId":[], "foodQuantity":this.state.quantity}
    store.dispatch(AddItem(objToSend, this.state.price));
    alert("Item Added to Cart")
  }

  backClicked = () => {

  }

  render(){
 
    if(this.props.items.length != 0){
      this.flag = true
    }

    return (   
      <View>
          <View style={{padding:20,margin:20,alignItems:"center", backgroundColor:"lightgrey"}}>
            <Text style={{width:'100%', fontWeight:"bold", fontSize:18}}>{this.state.itemdetails.name}</Text>
            <Text style={{width:'100%', fontSize:14, marginTop:10}}>{this.state.itemdetails.description}</Text>
            <Text style={{width:'100%', fontSize:14, marginTop:10}}>Price: {this.state.itemdetails.price} /- </Text>
            
          {
            // this.state.itemdetails.addOnQsnsDetails.length != 0 ? 
            // <View style={{marginTop:20}}>
            //   <RadioComponent extraarr={this.state.itemdetails.addOnQsnsDetails}/>
            // </View> : <View></View>
          }
        </View>
            <View style={{alignItems:"center"}}>
            <View style={{flexDirection:"row", marginTop:20}}>
              <Button title="-" onPress={
                () => {
                  if(this.state.quantity >= 2){
                    this.setState({
                    quantity : this.state.quantity - 1,
                    price : this.fixedprice * (this.state.quantity-1)
                  })
                  }
                }
              }/>
              <Text style={{fontWeight:"bold", marginTop:8, marginLeft:10, marginRight:10}}>{this.state.quantity}</Text>
              <Button title="+" onPress={
                () => {
                  this.setState({
                    quantity : this.state.quantity + 1,
                    price : this.fixedprice * (this.state.quantity+1)
                  })
                }
              }/>
            </View> 

            <Text style={{fontWeight:"bold", marginTop:10}}>Price : {this.state.price}</Text>
            <View style={{width:100, marginTop:10}}>
                  <Button
                    title="Add Item"
                    onPress={() => this.addItemClicked(this.state.itemdetails.id)}
            />
            </View> 

            <Link to={{
              pathname:"/foodlist",
              state:{
                url : this.url,
                userid: this.userid,
                rid: this.rid
              }
              }} style={{marginTop:20}}>
              <View>
                    <Text style={{fontWeight:"bold", backgroundColor:"lightgrey", padding:10}}>Back</Text>
              </View>
            </Link>
          </View>  
      </View>
    )
  }

}

class CheckBoxComponent extends React.Component{

  constructor(){
    super()
    this.state = {
      selected : false
    }
  }

  checkboxCreator(){
    const checkbox = this.props.extraarr.false.map((arr)=>{
      return <View><CheckBox value={this.state.selected} onValueChange={()=>{
        this.setState(
          {
            selected : !this.state.selected
          })
          }}/><Text>Hiiii</Text></View>
    })
    return checkbox
  }
  render(){
    return(
      <View>
        {this.checkboxCreator()}
      </View>
    )
  }
}

class RadioComponent extends React.Component{

  radioCreator(){
        const checkbox = this.props.extraarr.true.map((arr)=>{
      return <Text>{arr.id}</Text>
    })
    return checkbox
  }
  render(){
    return(
      <View>
      {this.radioCreator()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return ({
    items : state.items
  })
}

export default connect(mapStateToProps)(AddItemComponent)