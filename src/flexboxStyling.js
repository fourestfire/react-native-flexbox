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
  Name: 'Damon Doggo',
  Address: '123 Main Street',
  PhoneNumber: '212-787-4949',
  FavoriteFood: 'Pizza',
  Hobbies: 'Tennis, Frisbee'
}

export default class flexbox extends Component {
  static navigationOptions = {
    title: 'Flexbox Styling',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profilePicture}>
          <Image source={require('../img/doggo.jpg')} style={{height: 140, width: 140, borderRadius: 70, marginBottom: 20}}/>
          <Text style={[styles.text, {fontSize: 27, fontWeight:'100'}]}> {sampleContact.Name.split(' ')[0]} </Text>
        </View>

        {/*<View style={styles.divider} />*/}
        {
          Object.keys(sampleContact).map(key => {
            return (
              <View key={key} style={styles.contactRow}>
                <Text style={styles.contactKey}> {key.replace(/([A-Z])/g, ' $1')} </Text>
                <Text style={styles.contactValue}> {sampleContact[key]} </Text>
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
    // marginTop: 30,
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },

  text: {
    fontSize: 16,
  },

  profilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    flex: 1,
    borderRadius: 10
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },

  contactKey: {
    marginLeft: 10,
    width: 120,
    fontWeight: 'bold',
  },

  contactValue: {
    paddingVertical: 26 // adjust this for fun after setting flexGrow on sibling
  }

});

AppRegistry.registerComponent('flexbox', () => flexbox);

