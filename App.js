import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <View>
        <LoginScreen/>
        {/* <Text> textInComponent </Text> */}
      </View>
    )
  }
}
