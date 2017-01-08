'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const stylesGo = require('./stylesGo.js')
const constants = stylesGo.constants;
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

class ActionButton extends Component {
  render() {
    return (
      <View style={stylesGo.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={stylesGo.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
module.exports = ActionButton;
