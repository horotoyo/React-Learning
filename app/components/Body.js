import React, {Component} from 'react';
import {
	StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  View,
  Text,
} from 'native-base';

export default class Body extends Component {
	render() {
		return(
			<View>

				<View style={styles.bigview}>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img1.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img2.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img3.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>


					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img4.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img5.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img6.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img7.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img8.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img9.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img10.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img11.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>					

					<TouchableOpacity style={styles.smallview}>
						<Image 
							source={require('../img/img12.jpg')}
							style={styles.myimage}
							/>
					</TouchableOpacity>
					
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	bigview: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	smallview: {
		margin: 2,
		height: 150,
		width: (Dimensions.get('window').width / 2) - 4,
	},
	myimage: {
		flex: 1,
		width: null,
		alignSelf: 'stretch',
	},
	list: {
		flexDirection: 'row',
	}
});