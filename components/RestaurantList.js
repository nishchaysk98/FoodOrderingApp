import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import {connect} from "react-redux";
import {store} from "../store";

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.url = this.props.location.state.url;
    this.userid = this.props.location.state.userid;

    this.state = {
      load: false,
      loadeddata: [],
      globalstatechanged : false
    };

    // this.data = [
    //   {
    //     id: 1,
    //     token:[""],
    //     name: "Shantisagar",
    //     location:"Chamrajpete",
    //     isopen: false,
    //     rating:0.0,
    //     picture:"",
    //     geolocationX:0.0,
    //     geolocationY:0.0
    //   },
    //   {
    //     id: 2,
    //     token:[""],
    //     name: "Parijatha",
    //     location:"Kundapura",
    //     isopen: false,
    //     rating:0.0,
    //     picture:"",
    //     geolocationX:0.0,
    //     geolocationY:0.0
    //   },
    // ];
  }

  componentDidMount() {
    fetch(this.url+"/user/restaurants/"+this.userid)
      .then(response => response.json())
      .then(data => {
        this.setState({
          load: true,
          loadeddata: data, //Used in future for Real Api
        });
      })
      .catch(() => {});
  }

  render() {
    var loadstate = this.state.load;
    return (
      <View>
     

        <View style={{alignItems:"center", margin:20}}>
        {
            this.props.items.length != 0 ? <View style={{backgroundColor:"lightgreen" , width:'100%', alignItems:"center", padding:20}}><Text style={{fontWeight:"bold"}}>Number of items in Cart: {this.props.items.length}</Text><Text style={{fontWeight:"bold", marginTop:10}}>Total Price: {this.props.totalprice}</Text></View>: <Text></Text>
        }
        </View>

        {
            loadstate ? <FlatList
            data={this.state.loadeddata}
            renderItem={({ item })=><IndivItem itemrender={item} url={this.url} userid={this.userid}/>}/> : <Text style={{textAlign:"center",marginTop:10}}>Loading Restaurants for you</Text>
        }

      </View>
    );
  }
}

function IndivItem(props) {
    const linkto = "/foodlist";
  return (
    <View style={styles.style1}>
      <Link to={{
        pathname: linkto,
        state: {
          url : props.url,
          userid : props.userid,
          rid: props.itemrender.id
        }}
        }>
        <View style={{width:'100%', backgroundColor:"lightgrey",padding:10}}>
          <View style={{flexDirection:"column",flex:1, padding:10, width:'100%'}}>
            <Text style={{width:'100%', fontWeight:"bold", fontSize:18, flex:1}}>{props.itemrender.name}</Text>
            <Text style={{fontSize:14, flex:1, paddingLeft:30}}>Location: {props.itemrender.location}</Text>
            <Text style={{fontSize:14, flex:1, paddingLeft:30}}>Availability: {props.itemrender.isopen?"Open":"Closed"}</Text>
            <Text style={{fontSize:14, flex:1, paddingLeft:30}}>Rating {props.itemrender.rating}</Text>
          </View>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  style1 : {
    padding:10,
    width:'100%'
  }
})

function mapStateToProps(state) {
  return ({
    items : state.items,
    totalprice : state.totalprice
  })
}

export default connect(mapStateToProps)(RestaurantList);
