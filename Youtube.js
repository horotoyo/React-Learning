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

import Navbar from './app/youtube/Navbar';
import Tabbar from './app/youtube/Tabbar';
import Body from './app/youtube/Body';

export default class Galery extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Navbar />
        <ScrollView>
          <Body />
        </ScrollView>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: '#fff',
  },
});