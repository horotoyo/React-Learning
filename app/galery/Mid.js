import React, {Component} from 'react';
import {
	StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  View,
  Text,
} from 'native-base';

export default class Mid extends Component {
	render() {
		return(
			<View style={styles.mid}>
				<TouchableOpacity style={styles.outerview}>
					<Text style={styles.textone}>80 +</Text>
					<Text style={styles.texttwo}>Images</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.outerview}>
					<Text style={styles.textone}>1023 +</Text>
					<Text style={styles.texttwo}>Follower</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mid: {
		flexDirection: 'row',
		backgroundColor: '#2359a1',
	},
	outerview: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
	},
	textone: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
	texttwo: {
		color: '#fff',
		fontSize: 14,
	}
});