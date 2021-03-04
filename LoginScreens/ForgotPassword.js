import React from 'react';

import {View,Text, FlatList, BackHandler,Alert,PermissionsAndroid, ToastAndroid} from 'react-native';

import Signup from './Signup'
import Login from './Login'

import {createDrawerNavigator  } from 'react-navigation-drawer';
export default class ForgotPassword extends React.Component
{
constructor(props){
  super(props)
  this.state = {
    dataSource:[]
   };
}

backAction = () => {
  Alert.alert("Hold on!", "Are you sure you want to go back?", [
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel"
    },
    { text: "YES", onPress: () => BackHandler.exitApp() }
  ]);
  return true;
};

async requestLocationPermission() {
  const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
  if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      alert("You've access for the location:");
  } else {
      try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                  'title': 'Cool Location App required Location permission',
                  'message': 'We required Location permission in order to get device location ' +
                      'Please grant us.'
              }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             alert("You've access for the location");
          } else {
              alert("You don't have access for the location");
          }
      } catch (err) {
          alert(err)
      }
  }
};

componentDidMount(){

fetch("http://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then((responseJson)=>{
  this.setState({
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any



BackHandler.addEventListener("hardwareBackPress",this.backAction);
}

componentWillUnmount(){
  BackHandler.removeEventListener("hardwareBackPress",this.backAction)
}

  render(){
      const { navigate }=this.props.navigation;
      return(

        <View style={{flex:1,alignItems:'center',backgroundColor:'black'}}>

<Text onPress={this.requestLocationPermission} style={{padding:10,fontSize:20,fontWeight:'bold',backgroundColor:'green',color:'white'}}> List of data </Text>    


    {/* <View style={{height:5,backgroundColor:'gray'}}></View> */}
        <View style={{padding:10}}>
        <FlatList
           data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={{flex: 1}}>

        

          {/* <Text  onPress={() =>navigate('NavigationDrawer')} style= {{color:'white'}}>id:{item.id}</Text> */}
                    <Text  onPress={() =>navigate('NavigationDrawer')} style= {{color:'white'}}>id:{item.id}</Text>

           <Text style= {{color:'white'}}>userid :{item.userId.toString()}
          
           </Text>
           <Text style= {{color:'white'}}>title :{item.title.toString()}</Text>

           <View style={{height:5}}></View>
           <Text style= {{color:'white'}}>body :{item.body.toString()}</Text>

           <View style={{height:5,backgroundColor:'pink'}}></View> 
     
          </View>          
          }
         />
       </View>
       </View>

       )}
    }

