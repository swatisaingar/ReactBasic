import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import {TabView,SceneMap, TabBar} from 'react-native-tab-view';
// import FirstRoute from '../LoginScreens/ForgotPassword'

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Tab 1</Text>
 </View>
  );
   
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Tab 2</Text>
    </View>
  );
   
  const ThirdRoute =() =>( <View style={[styles.scene, { backgroundColor: '#000' }]}>
      
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Tab 3</Text>

      </View>);
  const initialLayout = { width: Dimensions.get('window').width };
   
  export default function Tabview() {
    const [index, setIndex] = React.useState(0);    // it means tab at 3 positon will be viewed first
    const [routes] = React.useState([     // it means how tab will be viewed with the index
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    {key:'third',title:'Third'},
    ]);
   
//scenemap will provide the context to the root means which activity or layout will appear her ewill be provided here...

    const renderScene = SceneMap({                // the key provide in route will be used in SceneMap
      first: FirstRoute,
      second: SecondRoute,
      third:ThirdRoute
    });
   
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex} 
        initialLayout={initialLayout}
    >

 <TabBar 
        indicatorStyle={{backgroundColor:'white'}}
        style={{color:'white'}}>    
        </TabBar>
        </TabView>
    );
  }
   
  const styles = StyleSheet.create({
    scene: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
  });

