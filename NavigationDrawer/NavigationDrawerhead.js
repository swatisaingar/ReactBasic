
import  React from 'react';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import { View, Text,ScrollView } from 'react-native';

import HomeScreen from '../LoginScreens/HomeScreen'
import Tabview from '../Tabs/Tabview'
import Logout from '../LoginScreens/Logout';


const AppNavigator = createDrawerNavigator({
  HomeScreen: {
      screen: HomeScreen
    },
    Logout: {
      screen:  Logout
    },
    Details:
    {
      screen : Tabview

    }
  },
  
  {
    contentComponent: (props) =>
<View style={{flex :1,height: 150}}>

<ScrollView>
<DrawerItems {...props} />
</ScrollView>
</View>
  },
  {
      initialRouteName: "HomeScreen"
    });


    export default AppNavigator;