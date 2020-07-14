import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default class T35_AlterarEmail extends React.Component {
	render() {
		return (

			<View style={styles.conteiner}>
				<TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
									<Image
									 source={require('../img/seta.png')}
									 style={styles.imageIcon}
									 />	 
				</TouchableOpacity>
				<Text style={styles.text}>Alterar e-mail</Text>
				<TextInput style={styles.input}
				placeholder= "Novo E-mail"
				/>
				<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T39_ConfirmaNovoEmail')}}>
               <View style={styles.viewbutton}>
                   <Text style={styles.textbutton}>
                           Alterar
                   </Text>
               </View>
           </TouchableOpacity>
			</View>
			)
	}
}
const styles = StyleSheet.create({
	conteiner:{
		backgroundColor:'#000',
		flex:1,
	},
	imageIcon:{
		height: 40,
		width: 40,
		marginLeft:30,
		marginTop:50 
	},
	text:{
		fontSize:30,
		color:'#FDE93A',
		marginLeft:20,
		marginTop:50,
		fontWeight: 'bold',
	},
	input:{
		color:'black',
		marginTop:25,
		marginLeft:20,
		backgroundColor: 'white',
		padding:10,
		width: 350, 
		height: 50,
		fontSize:25,
		borderRadius: 10,
	},
	viewbutton:{
		height: 60,
		borderBottomWidth: 1,
		alignItems: 'center',
		backgroundColor:'#FDE93A',
		borderRadius: 10, 
		width: 200,
	},
	textbutton: {
		fontSize:25,
		paddingTop: 15,
		color: 'black'

	},
	button:{
		padding:20,
		margin:10, 
		alignSelf: 'center',
	},
})