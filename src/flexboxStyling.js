import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

const sampleContact = {
  'Name': 'Damon Doggo',
  'Address': '123 Main Street',
  'Phone Number': '212-787-4949',
  'Favorite Food': 'Pizza',
  'Hobbies': 'Tennis, Frisbee'
}

const firstName = sampleContact.Name.split(' ')[0];

export default class Flexbox extends Component {
  static navigationOptions = {
    title: 'Flexbox Styling',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={require('../img/doggo.jpg')} style={styles.profileImage}/>
          <Text style={[styles.profileText]}> {firstName} </Text>
        </View>
        {
          Object.keys(sampleContact).map(key => {
            return (
              <View key={key} style={styles.contactRowContainer}>
                <Text style={[styles.text, styles.contactKey]}> {key} </Text>
                <Text style={[styles.text, styles.contactValue]}> {sampleContact[key]} </Text>
              </View>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  text: {
    fontSize: 15
  },

  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
    marginBottom: 20
  },

  profileText: {
    fontSize: 27,
    fontWeight:'100'
  },

  profileContainer: {
    backgroundColor: 'lavender',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  contactRowContainer: {
    // flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderColor: 'lightgrey',
    // alignItems: 'center',
  },

  contactKey: {
    fontWeight: 'bold',
    // marginLeft: 10,
    // width: 130,
  },

  contactValue: {
    // paddingVertical: 24
  }

});
