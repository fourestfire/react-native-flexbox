import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import FlexboxBasics from './src/FlexboxBasics'
import FlexboxStyling from './src/FlexboxStyling'
import BasicReactNative from './src/BasicReactNative'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native: Flexbox',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('BasicReactNative')}
          title="Basic React Native"
        />
        <Button
          onPress={() => navigate('FlexboxBasics')}
          title="Basic Flexbox"
        />
        <Button
          onPress={() => navigate('FlexboxStyling')}
          title="Flexbox Styling Example"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const flexbox = StackNavigator({
  Home: { screen: HomeScreen },
  BasicReactNative: { screen: BasicReactNative },
  FlexboxBasics: { screen: FlexboxBasics },
  FlexboxStyling: { screen: FlexboxStyling },
});

AppRegistry.registerComponent('flexbox', () => flexbox);

