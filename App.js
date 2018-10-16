/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationApp from './src/routes/routes'
import { Provider } from 'react-redux';
import {
  View
} from 'react-native';

import store from './src/store/store'
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <NavigationApp />

      </Provider>
    );
  }
}

