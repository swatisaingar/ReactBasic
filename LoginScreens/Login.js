
import axios from 'axios';
import React, { Component } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            images: [
                "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" // Network image

            ]
        }
    }

    render() {
        const manage = () => {
            this.props.navigation.navigate('Signup')
        }

        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ marginTop: 100 }}>
                    <SliderBox images={this.state.images} ImageComponentStyle={{ borderRadius: 150, width: '60%', marginTop: 5 }} />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20 }}>Picking your travel destinations</Text>
                </View>

                <TouchableOpacity style={{ width: '90%', backgroundColor: 'blue', marginTop: 25, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Login With Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={manage} style={{ width: '90%', backgroundColor: 'red', marginTop: 20, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Sign In</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-evenly' }}>
                    <Text>Haven't registered yet?</Text>
                    <Text style={{ color: 'red' }}>Join Now</Text>
                </View>

            </View>
        );
    }
}

