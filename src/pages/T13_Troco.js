import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class T13_Troco extends React.Component {
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

								<Text style={styles.text}>Pagamento apenas em dinheiro. Precisa de troco?</Text>

						<View style={styles.row}>

								<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T15_ConfirmaçaoLocal')}}>
			       					<View style={styles.viewbutton}>
			       							<Text style={styles.textbutton}>
			       									Não
			       							</Text>
			       					</View>
			       				</TouchableOpacity>
			       				
				       			<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate( 'T14_ValorTroco')}}>
				       				<View style={styles.viewbutton}>
				       					<Text style={styles.textbutton}>
				       							Sim
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
		fontSize:35,
		color: 'white',
		textAlign:'center',
	},

	row:{
		flexDirection: 'row',
	},

	button:{
		padding:20,
		marginTop:35,
		width: 200, 
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

