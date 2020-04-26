import React from "react";
import {View,Text,StyleSheet,TextInput,ScrollView,Button} from "react-native"

export default class RestaurantAddFood extends React.Component{
    constructor(props){
        super(props)
        this.url = this.props.location.state.url;
        this.rid = this.props.location.state.rid;
        this.state = {
        json:{
              rid : this.props.location.state.rid,
              name : "",
              description : "",
              addonqsnsDetails:{
                false:[],
                true:[]
              },
              picture:"",
              price:0.0
            },
        questioni:"",
        pricei:"0.0",
        questione:"",
        pricee:"0.0"
        }
    }
    onNameChange = (evt) =>{
      this.setState(prevState=>({
        json:{
          ...prevState.json,
          name: evt
        }
      }))
    }
    onDescriptionChange = (evt) =>{
      this.setState(prevState=>({
        json:{
          ...prevState.json,
          description: evt
        }
      }))
    }
    onPictureChange = (evt) =>{
      this.setState(prevState=>({
        json:{
          ...prevState.json,
          picture: evt
        }
      }))
    }
    onPriceChange = (evt) =>{
      this.setState(prevState=>({
        json:{
          ...prevState.json,
          price: parseFloat(evt)
        }
      }))
    }
    onQuestionChangeI = (evt) =>{
      this.setState({
        questioni : evt
      })
    }
    onaddPriceChangeI = (evt) =>{
      
          this.setState({
          pricei : (evt)
        })
      
    }
    onQuestionChangeE = (evt) =>{
      this.setState({
        questione : evt
      })
    }
    onaddPriceChangeE = (evt) =>{
      this.setState({
        pricee : (evt)
      })
    }
    onSaveInclusive = (evt)=>{
      
      if(this.state.questioni!="" && !isNaN(parseFloat(this.state.pricei))){
          this.setState(prevState => ({
          json:{
            ...prevState.json,
            addonqsnsDetails : {
              ...prevState.json.addonqsnsDetails,
              false: [...prevState.json.addonqsnsDetails.false, {
                exclusive:false,
                question: this.state.questioni,
                addOnPrice:parseFloat(this.state.pricei)
              }]
            }
          }
        }), alert("Inclusive Added"))
        this.setState({
          questioni:"",
          pricei:"0.0"
        })
      }
      else{
        alert("Invalid Data")
      }

      
    }
    onSaveExclusive = (evt)=>{
      
      if(this.state.questione!="" && !isNaN(parseFloat(this.state.pricee))){
          this.setState(prevState => ({
          json:{
            ...prevState.json,
            addonqsnsDetails : {
              ...prevState.json.addonqsnsDetails,
              true: [...prevState.json.addonqsnsDetails.true, {
                exclusive:true,
                question: this.state.questione,
                addOnPrice:parseFloat(this.state.pricee)
              }]
            }
          }
        }), alert("Exclusive Added"))
        this.setState({
          questione:"",
          pricee: "0.0"
        })
      }
      else{
        alert("Invalid Data")
      }
    }
    onSubmit =()=>{
      //take url as this.url
      //this.state.json has the required json
    }
    render(){
        return(

            <ScrollView>
              <View style={styles.style_4}>
                <View style={styles.style_3}>
                  <Text style={styles.style_6}>Add Food Details Below</Text>
                  <Text style={styles.style_1}>Name</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onNameChange}/>
                  <Text style={styles.style_1}>Description</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onDescriptionChange}/>
                  <Text style={styles.style_1}>Picture</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onPictureChange}/>
                  <Text style={styles.style_1}>Price</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onPriceChange}/>
                  <Text style={styles.style_6}>Add on Question Details</Text>


                  <View style={styles.style_10}>
                  <Text style={styles.style_9}>Inclusive Questions</Text>
                  {
                    this.state.json.addonqsnsDetails.false.length != 0 ? <Text style={styles.style_6}>{this.state.json.addonqsnsDetails.false.length} Inclusive Added</Text>: <Text style={styles.style_6}>No Inclusive Added yet!</Text>
                  }
                  <Text style={styles.style_1}>Question</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onQuestionChangeI} value={this.state.questioni}/>
                  <Text style={styles.style_1}>Price</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onaddPriceChangeI} value={(this.state.pricei)}/>
                  <Button color="orange" title="Save and Add One More" onPress={this.onSaveInclusive}/>
                  </View>


                  <View style={styles.style_10}>
                  <Text style={styles.style_9}>Exclusive Questions</Text>
                  {
                    this.state.json.addonqsnsDetails.true.length != 0 ? <Text style={styles.style_6}>{this.state.json.addonqsnsDetails.true.length} Exclusive Added</Text>: <Text style={styles.style_6}>No Exclusive Added yet!</Text>
                  }
                  <Text style={styles.style_1}>Question</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onQuestionChangeE} value={this.state.questione}/>
                  <Text style={styles.style_1}>Price</Text>
                  <TextInput style={styles.style_2} onChangeText={this.onaddPriceChangeE} value={(this.state.pricee)}/>
                  <Button color="orange" title="Save and Add One More" onPress={this.onSaveExclusive}/>
                  </View>


                  <View  style={styles.style_8}>  
                  <Button title="Add Food" onPress={this.onSubmit} />
                  </View>
                </View>
              </View>
            </ScrollView>
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
    backgroundColor:"white", 
    marginTop:10,
    padding:10
  },
  style_3 : {
    width:'80%', 
    textAlign:"center"
  },
  style_4:{
    alignItems:"center", 
    width:'100%',
    flex:1,
    backgroundColor:"#F9EBEA"
  },
  style_5 : {
    padding:20, 
    textAlign:"center", 
    alignItems:"center", 
    flexDirection:"row"
  },
  style_6 : {
    padding:10, 
    marginLeft:50, 
    marginRight:50, 
    marginTop:20, 
    textAlign:"center", 
    alignItems:"center",
    fontWeight:"bold"
  },
  style_7 : {
    width:'100%',
    backgroundColor:"lightgrey", 
    marginTop:10,
    padding:10
  },
  style_8 : {
    marginBottom:20,
    marginTop:20
  },
  style_9 : {
    width:'100%',
    backgroundColor:"#F9EBEA", 
    marginTop:20,
    padding:10
  },
  style_10 : {
    backgroundColor:"#F2D7D5", 
    padding:20,
    marginTop:10
  }
})