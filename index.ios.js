import NavigationBar from 'react-native-navbar'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  Picker,
  DatePickerIOS,
} from 'react-native'

// import Landing from './application/components/Landing';
// import Dashboard from './application/components/Dashboard';
// import { globals } from './application/styles';

class startups extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <NavigationBar
         title={{ title: 'Title', tintColor: 'black', }}
         leftButton={{ title: 'Back', }}
         rightButton={{ title: 'Forward', }}
         style={{ backgroundColor: "white", }}
         statusBar={{ tintColor: "white", }}
       />

       <MapView
            style={{
              height: 200,
              width: 300,
            }}
            onRegionChange={() => {}}
            onRegionChangeComplete={() => {}}
            showsUserLocation={true}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//   render() {
//     return (
//       <Navigator
//         style={globals.flex}
//         initialRoute={{ name: 'Landing' }}
//         renderScene={(route, navigator) => {
//           switch(route.name){
//             case 'Landing':
//               return (
//                 <Landing navigator={navigator}/>
//             );
//             case 'Dashboard':
//               return (
//                 <Dashboard navigator={navigator}/>
//             );
//           }
//         }}
//       />
//     );
//   }
// }

AppRegistry.registerComponent('startups', () => startups);
