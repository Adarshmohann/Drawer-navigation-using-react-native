import React,{Component} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"
import { ScrollView } from "react-native-gesture-handler";


export default class Login extends Component{

  constructor(){
    super();
    this.state ={
      number:null
    

    }


  }
  updateValue(Number){
    this.setState({number : Number})

 }
  
  render(){
    return (
    <View style={styles.container}>
      <View style={{height:'60%',width:'100%',alignItems:'center',justifyContent:'center'}}>
      {/* <Image source={require('../images/inmakes.png')}style={styles.logo}> */}
          {/* </Image> */}
          </View>
          <View style={{height:'17%',width:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.textView}>Enter your mobile number</Text>
          <Text>We will send you an OTP to verify</Text>
          </View>
          
          <View style={styles.vwbar}>
            <View style={{flexDirection:'row'}}>
            
            <TextInput style={styles.inputvw}
            placeholder={'+91'}
            placeholderTextColor='white'>
              

            </TextInput>
            <TextInput style={styles.inputvwq}
            placeholder={'Mobile number'}
            placeholderTextColor='white'
            onChangeText={(Number)=>this.updateValue(Number)}>

            </TextInput>
            </View>
            <TouchableHighlight style={styles.button}
            underlayColor='white'
            onPress={()=>this.props.navigation.navigate('Otp',{Number:this.state.number})}>
              <Text style={{fontWeight:'bold',color:'white'}}>Continue</Text>

            </TouchableHighlight>
            
            </View>
          </View>
    )
  }
}
  
  


const styles = StyleSheet.create({
  container : {
    height: '100%',
    width : '100%',
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center'
   },
  logo:{
    height:80,
    width:300,
    marginTop:80
    
    
  },
  textView:{
    fontSize:20,
    fontWeight: 'bold',
    color:'black',
    marginTop:50
  },
  inputvw:{
    height:55,
    width:65,
    backgroundColor:'black',
    borderRadius:5,
    borderColor:'gray',
    borderWidth:2,
    padding:20,
    color:'white'
    
  },
  vwbar:{
    height:'35%',
    width:'100%',
    backgroundColor:'black',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    
  },
  inputvwq:{
    height:55,
    width:180,
    backgroundColor:'black',
    marginLeft:10,
    borderRadius:5,
    borderColor:'gray',
    borderWidth:2,
    padding:20,
    color:'white'
    
  },
  button:{
    height:50,
    width:200,
    backgroundColor:'green',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5

  }

})

