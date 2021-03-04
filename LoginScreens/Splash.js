import React , { Component }  from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';


export default class splash extends Component{

    componentDidMount() {
        setTimeout(() => {

          this.props.navigation.navigate('Login')
            // go to Home page
        }, 3000)
    }

  render(){  
    const { navigate } = this.props.navigation; 
    return(

        <SafeAreaView style={{flex:1}} >
       
<View style={styles.container}>

<StatusBar style={{backgroundColor:"orange"}}></StatusBar>

<Image  style={styles.Image}  source={require('../assets/splash_logo.png')} ></Image>

<Text   style={styles.text}>Work Application</Text>

<Text style={styles.textBottom}>One useful app that you cant afford...</Text>

</View>

</SafeAreaView>

    );
}
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"orange"
    },
    text:{
        fontSize:18,
        fontWeight:"normal",
        color:"white"
    },

    textBottom:{
        position:"absolute",
        bottom:5,
        
      color:"white",
        fontSize:16,
        
    },
    Image:{
        justifyContent:"center"
    },

});
