import React, {Component} from 'react';
import {
	StyleSheet,
	Dimensions,
	ScrollView,
} from 'react-native';
import {
  View,
  Text,
} from 'native-base';

import Header from './app/galery/Header.js';
import Mid from './app/galery/Mid.js';
import Body from './app/galery/Body.js';

export default class Galery extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>
      	<Header />
      	<Mid />
      	<Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: '#bcbcbc',
  },
});