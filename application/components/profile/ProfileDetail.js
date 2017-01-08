/* application/components/profile/ProfileDetail.js */
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,

  StyleSheet,
  ListView,
  AlertIOS

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { currentUser } from '../../fixtures';
import { globals, profileStyles } from '../../styles';
const styles = profileStyles;

// Firebase require Start
const firebase = require('firebase');
const StatusBar = require('../StatusBar');
const ActionButton = require('../ActionButton');
const ListItem = require('../ListItem');
// Firebase require End

// Initialize Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "firereactbasenative.firebaseapp.com",
  databaseURL: "https://igottago-71c7d.firebaseio.com/",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class ProfileDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
   return firebaseApp.database().ref();
 }

 listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    let titleConfig = { title: 'Public List', tintColor: 'white' };
    return (
      <View style={[globals.flexContainer, globals.inactive]}>
          <NavigationBar
            title={titleConfig}
            tintColor={Colors.brandPrimary}
          />
          <ScrollView style={globals.flex}>

              <ListView
               dataSource={this.state.dataSource}
               renderRow={this._renderItem.bind(this)}
               enableEmptySections={true}
               style={styles.listview}/>

             <ActionButton onPress={this._addItem.bind(this)} title="Add" />

          </ScrollView>

        </View>
    );
  }
  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

}

const stylesGo = StyleSheet.create({
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

export default ProfileDetail;
