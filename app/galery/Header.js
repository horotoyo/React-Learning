import React, {Component} from 'react';
import {
	StyleSheet,
	ImageBackground,
  Image,
} from 'react-native';
import {
  View,
  Text,
} from 'native-base';

export default class Header extends Component {
	render() {
		return(
			
				<ImageBackground
					source={require('../img/background.jpg')}
					style={styles.bgimage}
				>
					<View style={styles.headcon}>
						<View style={styles.piccon}>
							<Image
								source={require('../img/profile.jpg')}
								style={styles.mypic}
								/>
						</View>
						<Text style={styles.name}>Suryo Widiyanto</Text>
						<Text style={styles.liner}>Seorang buruh multimedia</Text>
					</View>
				</ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	bgimage: {
		flex: 1,
		width: null,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	headcon: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
	piccon: {
		width: 120,
		height: 120,
	},
	mypic: {
		flex: 1,
		width: null,
		alignSelf: 'stretch',
		borderRadius: 90,
		borderColor: '#fff',
		borderWidth: 3,
	},
	name: {
		marginTop: 15,
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
	},
	liner: {
		color: '#fff',
		fontSize: 13,
		fontStyle: 'italic',
	}
});