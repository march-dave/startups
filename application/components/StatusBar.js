'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const stylesGo = require('./stylesGo.js')
const { StyleSheet, Text, View} = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={stylesGo.statusbar}/>
        <View style={stylesGo.navbar}>
          <Text style={stylesGo.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

module.exports = StatusBar;
