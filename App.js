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

import Header from './app/components/Header.js';
import Mid from './app/components/Mid.js';
import Body from './app/components/Body.js';

export default class App extends React.Component {
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