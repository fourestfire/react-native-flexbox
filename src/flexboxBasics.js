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
      <View style={styles.box}>
        <Box style={{backgroundColor: 'orange'}}/>
        <Box style={{backgroundColor: 'salmon'}}/>
        <Box style={{backgroundColor: 'darksalmon'}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
