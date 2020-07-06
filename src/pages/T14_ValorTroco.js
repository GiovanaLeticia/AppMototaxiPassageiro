import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class T14_ValorTroco extends React.Component {
  	render() {
		return (
			<View>
			


			<View style={styles.map}>
								<TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
									<Image
								     source={require('../img/seta.png')}
								     style={styles.imageIcon}
								    />		 
								</TouchableOpacity>

			</View>
					<View style={styles.janela}>
						<View style={styles.flex}>
								<Text style={styles.text}>Troco para</Text>
								<TextInput style={styles.textinput} type="number" 
								keyboardType='numeric'
								placeholder='R$ 000,00'
								></TextInput>

						</View>		
						<View >

								<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T15_ConfirmaçaoLocal')}}>
				       				<View style={styles.viewbutton}>
				       					<Text style={styles.textbutton}>
				       							Confirmar
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
	map:{
		backgroundColor: '#4D4DFF',
		height: 623,
	},

	imageIcon:{
		height: 40,
		width: 40,
		marginLeft:30,
		position:'absolute',
		marginTop:50
	},
	
	janela:{
		backgroundColor:'#000',
		height:275,
		borderTopWidth: 1,
		borderColor:'#fff',
		paddingTop:10
	},

	flex:{
		flexDirection: 'row',
		padding:20,
	},

	text:{
		fontSize:35,
		color: 'white',
		textAlign:'center'
	},

	textinput:{
		backgroundColor:'#FDE93A',
		width: 200,
		marginLeft:10,
		borderBottomWidth: 1,
		borderRadius: 10,
		fontSize:30,
		
	},

	button:{
		padding:20,
		marginTop:40,
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

});

