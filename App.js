/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';

import AppNav from './pages';

import {Provider} from 'react-redux'
import store from './configureStore';


const App = () => {
  return (
    <Provider store = {store}>
    <View>
      <AppNav></AppNav>
    </View>

    </Provider>
  );
};

export default App;
