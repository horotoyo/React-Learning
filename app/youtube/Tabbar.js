import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  View,
  Text,
} from 'native-base';


export default class Tabbar extends Component {
	render() {
		return(
			<View style={styles.tabbar}>
				<TouchableOpacity style={styles.container}>
					<Icon name="home" size={27} style={styles.icons} />
					<Text style={styles.mytext}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Icon name="whatshot" size={27} style={styles.icons} />
					<Text style={styles.mytext}>Trending</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Icon name="subscriptions" size={27} style={styles.icons} />
					<Text style={styles.mytext}>Subscription</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Icon name="add-alert" size={27} style={styles.icons} />
					<Text style={styles.mytext}>Activity</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Icon name="folder" size={27} style={styles.icons} />
					<Text style={styles.mytext}>Collection</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabbar: {
		backgroundColor: '#fff',
		height: 60,
		borderTopWidth: 2,
		borderColor: '#e5e5e5',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	mytext: {
		fontSize: 14,
		textAlign: 'center',
		paddingTop: 2,
		color: 'rgb(50,50,50)',
	}
});