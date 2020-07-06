import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';




export default class T12_ValorViagem extends React.Component {
  	render() {		
		return (					
			<View>


				<View style={styles.map}>
									<TouchableOpacity>
										<Image
									     source={require('../img/seta.png')}
									     style={styles.imageIcon}
									    />		 
									</TouchableOpacity>
				</View>

						<View style={styles.janela}>

								<Text style={styles.text}>Valor da viagem:</Text>
								<Text style={styles.text2}>R$ 00,00</Text>

							<View style={styles.row}>

									<TouchableOpacity style={styles.button} onPress={() => {navigation.navigate( )}}>
					       				<View style={styles.viewbutton}>
					       					<Text style={styles.textbutton}>
					       							Cancelar
					       					</Text>
					       				</View>
					       			</TouchableOpacity>

					       			<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate( 'T13_Troco')}}>
					       				<View style={styles.viewbutton2}>
					       					<Text style={styles.textbutton}>
					       							Continuar
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
		paddingTop:15
	},

	text:{
		fontSize:40,
		color: 'white',
		textAlign:'center'
	},

	text2:{
		marginTop:20,
		fontSize:40,
		color: 'white',
		textAlign:'center',
		fontWeight:'bold'
	},

	row:{
		flexDirection: 'row',

	},

	button:{
		padding:20,
		width: 200,
	},

	viewbutton:{
		height: 60,
		borderBottomWidth: 1,
		backgroundColor:'#f00',
		borderRadius: 10,
	},

	viewbutton2:{
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

