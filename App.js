import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Splash from './LoginScreens/Splash';
import Login from './LoginScreens/Login';
import Signup from './LoginScreens/Signup';
import ForgotPassword from './LoginScreens/ForgotPassword';
import HomeScreen from './LoginScreens/HomeScreen';
import Tab from './Tabs/Tabview';
import NavigationDrawer from './NavigationDrawer/NavigationDrawerhead'
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  Splash: { screen: Splash }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Login: { screen: Login }, 

    Signup:{screen: Signup},

    ForgotPassword:{ screen: ForgotPassword},

    HomeScreen:{screen: HomeScreen},
    Tabview : {screen : Tab},
    NavigationDrawer :{screen : NavigationDrawer},
  },
  {headerMode:'none'},
  {
    initialRouteName: 'Splash',
  }
);
export default createAppContainer(App);