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


export default class Body extends Component {
	render() {
		return(
			<View style={styles.container}>

				<View style={styles.thumbox}>
					<Image
						source={require('../img/img8.jpg')}
						style={styles.thumbnails}
						/>
				</View>
				<View style={styles.textcontainer}>
					<Image
						source={require('../img/profile.jpg')}
						style={styles.profilepic}
						/>
						<View style={styles.inner}>
							<Text style={styles.videotitle}>How to cook in natural places</Text>
							<Text style={styles.videostat}>Suryo Widiyanto - 2000+ Viewer</Text>
						</View>
				</View>

				<View style={styles.thumbox}>
					<Image
						source={require('../img/img3.jpg')}
						style={styles.thumbnails}
						/>
				</View>
				<View style={styles.textcontainer}>
					<Image
						source={require('../img/profile.jpg')}
						style={styles.profilepic}
						/>
						<View style={styles.inner}>
							<Text style={styles.videotitle}>The amazing city</Text>
							<Text style={styles.videostat}>Suryo Widiyanto - 200+ Viewer</Text>
						</View>
				</View>

				<View style={styles.thumbox}>
					<Image
						source={require('../img/img5.jpg')}
						style={styles.thumbnails}
						/>
				</View>
				<View style={styles.textcontainer}>
					<Image
						source={require('../img/profile.jpg')}
						style={styles.profilepic}
						/>
						<View style={styles.inner}>
							<Text style={styles.videotitle}>Tracking the merapi mountain</Text>
							<Text style={styles.videostat}>Suryo Widiyanto - 8900+ Viewer</Text>
						</View>
				</View>

				<View style={styles.thumbox}>
					<Image
						source={require('../img/img6.jpg')}
						style={styles.thumbnails}
						/>
				</View>
				<View style={styles.textcontainer}>
					<Image
						source={require('../img/profile.jpg')}
						style={styles.profilepic}
						/>
						<View style={styles.inner}>
							<Text style={styles.videotitle}>The wrong way</Text>
							<Text style={styles.videostat}>Suryo Widiyanto - 310+ Viewer</Text>
						</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: '#000',
	},
	thumbox: {
		justifyContent: 'center',
		width: '100%',
	},
	thumbnails: {
		flex: 1,
		height: 200,
		width: '100%',
		borderRadius: 5,
		justifyContent: 'space-between',
		alignSelf: 'stretch',
	},
	textcontainer: {
		marginLeft: 10,
		marginBottom: 30,
		paddingRight: 5,
		flexDirection: 'row',
		paddingTop: 15,
	},
	profilepic: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#fff',
	},
	videotitle: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 14,
		marginTop: 3,
	},
	videostat: {
		fontSize: 12,
		color: '#fff',
		marginTop: 2,
	},
	inner: {
		marginLeft: 10,
		padding: 5,
	},
});