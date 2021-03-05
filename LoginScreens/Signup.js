
import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            stored:{},
            initializing:true,
            user:''
        };
    }
    
    handleemail=(text)=>{
        this.setState({email:text})
    }
    handlepassword=(text)=>{
        this.setState({password:text})
    }
    
    componentDidMount = () =>{
      
    }
    render() {
        const data = { 
            password: this.state.password,  
            email: this.state.email
        } 
        const manage = () => {
            fetch('https://jsonplaceholder.typicode.com/users', { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
                                
            })
      .then(response => response.json())
      .then(json => {
          this.props.navigation.navigate('HomeScreen',{id:json})
         });   
           
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>Sign In</Text>
                </View>
               
                <View>
                    <TextInput
                        ref='mobnumber'
                        style={{ borderWidth: 1, marginTop: 100, borderRadius: 10, borderColor: 'gray', marginLeft: 10, marginRight: 10, fontSize: 20 }}
                        //  onChangeText = {this.handlePassword}
                        keyboardType="email-address"
                        value={this.state.email}
                        disableFullscreenUI={true}
                        onChangeText={this.handleemail}
                        placeholder="ID"
                        placeholderTextColor={'gray'}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => { this.refs.lname.focus(); }}
                    />
                </View>

                <View>
                    <TextInput
                        ref='mobnumber'
                        style={{ borderWidth: 1, marginTop: 30, borderRadius: 10, borderColor: 'gray', marginLeft: 10, marginRight: 10, fontSize: 20 }}
                        //  onChangeText = {this.handlePassword}
                        keyboardType="email-address"
                        value={this.state.password}
                        disableFullscreenUI={true}
                        onChangeText={this.handlepassword}
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => { this.refs.lname.focus(); }}
                    />
                </View>
                <TouchableOpacity onPress={manage} style={{width:'95%',backgroundColor:'red',marginTop:20,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:10}}>
                        <Text style={{alignSelf:'center',color:'white',fontSize:20}}>Sign In</Text>
                    </TouchableOpacity>
                  
                        <Text style={{alignSelf:'center',fontSize:20,marginTop:10,color:'gray'}}>Forget your Password?</Text>
                   
            </View>
        )
    }
}

export default SignUp;
