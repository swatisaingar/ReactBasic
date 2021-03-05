
import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            stored:{}
        };
    }
    

    render() {
       
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>Sign In</Text>
                </View>
               
            
            </View>
        )
    }
}

export default Logout;
