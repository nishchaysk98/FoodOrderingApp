import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import {connect} from "react-redux";
import {store} from "../store";

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
      loadeddata: [],
      globalstatechanged : false
    };

    this.data = [
      {
        id: 5,
        rid: 1,
        name: 'Idly',
        description: 'Rice pudding',

        addOnQsnsDetails: {
          false: [],
          true: [],
        },
        picture: 'Idly',
        price: 25.0,
      },
      {
        id: 8,
        rid: 1,
        name: 'South Meals',
        description: 'Meal with cup of rice, sambaar, rasam, curd',
        addOnQsnsDetails: {
          false: [
            {
              id: 1,
              question: 'Gulab jamoon',
              exclusive: false,
              addOnPrice: 20.0,
            },
            {
              id: 2,
              question: 'Mysore Pak',
              exclusive: false,
              addOnPrice: 15.0,
            },
          ],
          true: [
            {
              id: 5,
              question: 'Ghee rice',
              exclusive: true,
              addOnPrice: 40.0,
            },
            {
              id: 6,
              question: 'Veg Pulao',
              exclusive: true,
              addOnPrice: 60.0,
            },
          ],
        },
        picture: 'Meal pictures',
        price: 150.0,
      },
    ];
  }

  componentDidMount() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
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
     
      <View style={{height:50, alignItems:"center"}}><Text style={{marginTop:20, fontWeight:"bold"}}>Food Ordering App</Text></View>

      <View style={{alignItems:"center"}}>
       {
        this.props.items.length != 0 ? <View><Text style={{fontWeight:"bold"}}>Number of items in Cart: {this.props.items.length}</Text><Text style={{fontWeight:"bold", marginTop:10}}>Total Price: {this.props.totalprice}</Text></View>: <Text></Text>
      }
      </View>

      { loadstate ? <FlatList
            data={this.data}
            renderItem={({ item })=><IndivItem itemrender={item}/>}/> : <Text>Loading</Text>
            }
      </View>
    );
  }
}

function IndivItem(props) {
  return (
    <View style={styles.style1}>
      <Link to={{ pathname: '/add', state: { itemdetails: props.itemrender }}}>
        <View>
          <View style={{flexDirection:"column",flex:1, padding:10, width:'100%'}}>
            <Text style={{width:'90%', fontWeight:"bold", fontSize:18, flex:1}}>{props.itemrender.name}</Text>
            <Text style={{fontSize:14, flex:1}}>{props.itemrender.description}</Text>
            <Text style={{fontSize:14, flex:1}}>Price: {props.itemrender.price}/-</Text>
          </View>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  style1 : {
    flexDirection:"row",
    marginTop:20,
    marginLeft: 20,
    marginRight: 20,
  }
})

function mapStateToProps(state) {
  return ({
    items : state.items,
    totalprice : state.totalprice
  })
}

export default connect(mapStateToProps)(UserPage);
