import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import AppNavigator from './src/AppNavigator';

export default class belajarRnLagi extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('belajarRnLagi', () => belajarRnLagi);
