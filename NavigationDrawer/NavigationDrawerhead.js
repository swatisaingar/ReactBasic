
import  React from 'react';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import { View, Text,ScrollView } from 'react-native';

import HomeScreen from '../LoginScreens/HomeScreen'
import Tabview from '../Tabs/Tabview'
import ForgotPassword from '../LoginScreens/ForgotPassword';


const AppNavigator = createDrawerNavigator({
  HomeScreen: {
      screen: HomeScreen
    },
    About: {
      screen:  Tabview
    },
    Details:
    {
      screen : ForgotPassword

    }
  },
  
  {
    contentComponent: (props) =>
<View style={{flex :1,height: 150}}>
<Text>Header</Text>
<ScrollView>
<DrawerItems {...props} />
</ScrollView>
</View>
  },
  {
      initialRouteName: "HomeScreen"
    });


    export default AppNavigator;