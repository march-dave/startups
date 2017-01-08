import React, {Component} from 'react';
import ReactNative from 'react-native';
const stylesGo = require('./stylesGo.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={stylesGo.li}>
          <Text style={stylesGo.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
