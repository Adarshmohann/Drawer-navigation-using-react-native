import React,{Component} from "react";
// import  Icon  from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"




export default class Otp extends Component{

  constructor(){
    super();
    this.state ={
      number:null
    

    }
  }
  componentDidMount(){

    console.log('number is',this.props.route.params.Number)
    
    
  }

  
  render(){
    return (
    <View style={styles.container}>
      <View style={{height:'35%',width:'100%',alignItems:'center',justifyContent:'center'}}>
      {/* <Image source={require('../images/inmakes.png')}style={styles.logo}> */}
          {/* </Image> */}
          {/* <Image style={{height:80,width:80,marginTop:40}} source={require('../images/book3.jpg')}> */}
              
            {/* </Image> */}
          
         </View>
         
            
          <View style={{height:'30%',width:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.textView}>Verification code</Text>
          <Text>Please type the verification code sent to </Text>
         
          <Text style={{color:'black',fontWeight:'bold'}}>+91{this.props.route.params.Number}</Text>
          
          </View>
          
          <View style={styles.vwbar}>
            <View style={{flexDirection:'row'}}>
            
            <TextInput style={styles.inputvw}>
              </TextInput>
              <TextInput style={styles.inputvw}>
              </TextInput><TextInput style={styles.inputvw}>
              </TextInput><TextInput style={styles.inputvw}>
              </TextInput><TextInput style={styles.inputvw}>
              </TextInput>
            <TextInput style={styles.inputvw}>
              
            </TextInput>
            </View>
            <TouchableHighlight style={styles.button}
            underlayColor='white'
            onPress={()=>this.props.navigation.navigate('MyDrawer')}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>Resend OTP</Text>

            </TouchableHighlight>
            <Text style={{color:'gray',marginTop:5}}>Resend after 10s</Text>

            <View style={{flexDirection:'row',marginTop:20}}>
              {/* <Icon name="phone" color='green' size={22}/> */}
            <Text style={{color:'green',fontWeight:'bold',marginLeft:5}}>Contact Us</Text>

          </View>
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
    marginTop:50,
    
  },
  inputvw:{
    height:55,
    width:60,
    backgroundColor:'black',
    borderRadius:5,
    borderColor:'gray',
    borderWidth:2,
    marginLeft:5,
    color:'white'
    
    
  },
  vwbar:{
    height:'40%',
    width:'100%',
    backgroundColor:'black',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    
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

