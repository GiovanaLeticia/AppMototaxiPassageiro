import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

import rating from './T20_FinalizaçaoViagem'

export default class T21_Comentário extends React.Component {


  	render() {	
		return (
			<View style={styles.fundo}>
				<Text style={styles.text1}>Sua Avaliação</Text>

				<AirbnbRating
					  count={5}
					  reviews={[""]}
					  size={65}
					  defaultRating={0}
					  onStartRating={this.rating}
					/>

				<Text style={styles.text2}>Adicione seu comentário abaixo</Text>
			<View style={styles.viewinput}>
			<TextInput style={styles.input}>	
			</TextInput>
			</View>
			<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate({  })}}>
			       				<View style={styles.viewbutton}>

			       					<Text style={styles.textbutton}>
			       							Finalizar
			       					</Text>

			       				</View>
			       			</TouchableOpacity>




			</View>
		)

	}

}

const styles = StyleSheet.create({
	fundo:{
		backgroundColor:'#000000',
      	flex:1,
  	},
  	text1:{
		color: "#fff",
		fontSize:30,
		alignSelf: 'center',
		paddingTop:100,

	},
  	text2:{
		color: "#fff",
		fontSize:20,
		alignSelf: 'center',
		paddingTop:50,
		paddingBottom:20

	},
	viewinput:{
		backgroundColor:'#fff',
		height:300,
		width:360,
		alignSelf: 'center',

	},
	input:{
		fontSize:20
	},
	button:{
		padding:20,
		marginTop:35,
		width: 300, 
		alignSelf: 'center',
	},

	viewbutton:{
		height: 60,
		borderBottomWidth: 1,
		backgroundColor:'#FDE93A',
		borderRadius: 10,
	},

	textbutton:{
		fontSize:30,
		paddingTop: 12,
		color: 'black',
		textAlign:'center'
	},



  	})