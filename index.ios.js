/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   Navigator
 } from 'react-native';

import Landing from './application/components/Landing';

class startups extends Component {
  render() {
    return(
      <Landing />
    );
  }
}

AppRegistry.registerComponent('startups', () => startups);
