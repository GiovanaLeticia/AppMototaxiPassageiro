import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';





export default class T20_FinalizaçaoViagem extends React.Component {

  	render() {		
		return (

			<View style={styles.fundo}>
				<View>
				<Image
					source={require('../img/logo.png')}
					style={styles.imageIcon}
					 />		 
				</View>

				<Text style={styles.text1}>Agradecemos a preferencia!</Text>

				<View style={styles.viewbot}>

				<Text style={styles.text2}>Avalie Sua Viagem</Text>

				<AirbnbRating
					  count={5}
					  reviews={[""]}
					  defaultRating={0}
					  size={65}

				/>
				

				<View style={styles.row}>

									<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate( )}}>
					       				<View style={styles.viewbutton}>
					       					<Text style={styles.textbutton}>
					       							Finalizar
					       					</Text>
					       				</View>
					       			</TouchableOpacity>

					       			<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T21_Comentário')}}>
					       				<View style={styles.viewbutton2}>
					       					<Text style={styles.textbutton}>
					       							Comentário
					       					</Text>
					       				</View>
					       			</TouchableOpacity>

				       		
				</View>

</View>

			</View>

		)
	}

}

const styles = StyleSheet.create({
	fundo:{
		backgroundColor:'#000000',
      	flex:1,
  	},
	
	imageIcon:{
		alignSelf: 'center',
		width:300,
      	height:300,
      	marginTop:100,
	},
	text1:{
		color: "#fff",
		fontSize:30,
		alignSelf: 'center',
		paddingTop:20,
	},
	viewbot:{
		backgroundColor:'#FDE93A',
		flex:1,
		marginTop:100
	},
	text2:{
		color: "#000",
		fontSize:30,
		alignSelf: 'center',
		paddingTop:20,

	},
	row:{
		flexDirection: 'row',

	},
	button:{
		padding:20,
		width: 200,
		marginTop:20
	},

	viewbutton:{
		height: 60,
		borderBottomWidth: 1,
		backgroundColor:'#000',
		borderRadius: 10,
	},

	viewbutton2:{
		height: 60,
		borderBottomWidth: 1,
		backgroundColor:'#000',
		borderRadius: 10,

	},

	textbutton:{
		fontSize:30,
		paddingTop: 12,
		color: '#fff',
		textAlign:'center'
	},



})