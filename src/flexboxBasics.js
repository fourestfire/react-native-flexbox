import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Box from './box'

export default class FlexboxBasics extends React.Component {
  static navigationOptions = {
    title: 'Flexbox Basics',
  };
  render() {
    return (
      <View style={styles.container}>
        <Box style={{backgroundColor: 'darksalmon'}}/>
        <Box style={{backgroundColor: 'salmon'}}/>
        <Box style={{backgroundColor: 'peachpuff'}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});
