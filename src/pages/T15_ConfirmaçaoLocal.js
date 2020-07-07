import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';


export default class T15_ConfirmaçaoLocal extends React.Component {
	constructor(props) {
    	super(props);

  		this.state = {
        isVisible: false
    	};
 	 }
		
	render(){
return (
			
	<View style={styles.conteiner}>
		    <Modal
	          animationType={'fade'}
	          transparent={true}
	          visible={this.state.isVisible}
	          onRequestClose={() => {
	            this.setState({ isVisible: false });
	          }}
	        >
		        <View style={styles.modalbackground}>

		          	<View style={styles.modalstyle}>

							<Text style={styles.modaltext}>Após encontrar motorista não será possível cancelar a corrida. Deseja solicitar mesmo assim?</Text>

						<View style={styles.row}>

									<TouchableOpacity style={styles.modalbutton} onPress={() => {this.setState({ isVisible: false })}}>
					       				<View style={styles.modalviewbutton}>

					       					<Text style={styles.modaltextbutton}>
					       								Cancelar
					       					</Text>

					       				</View>
					       			</TouchableOpacity>

					       			<TouchableOpacity style={styles.modalbutton} onPress={() => {this.props.navigation.navigate()}}>
					       				<View style={styles.modalviewbutton2}>

					       					<Text style={styles.modaltextbutton}>
					       								Continuar
					       					</Text>

					       				</View>
					       			</TouchableOpacity>
				       	</View>

					</View>
				</View>	
        </Modal>

	     
			<View style={styles.map}>
							<TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
								<Image
							     source={require('../img/seta.png')}
							     style={styles.imageIcon}
							    />		 
							</TouchableOpacity>

			</View>

				<View style={styles.janela}>

							<Text style={styles.text}>Restaurante</Text>
							<Text style={styles.text}>Rua xx, Araras-SP</Text>

					<View >

							<TouchableOpacity style={styles.button} onPress={() => {this.setState({ isVisible: true })}}>
			       				<View style={styles.viewbutton}>

			       					<Text style={styles.textbutton}>
			       							Confirmar destino
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
	
	modalbackground:{
			backgroundColor: 'rgba(0,0,0,0.7)',
			flex:1
	},

	modalstyle:{
		backgroundColor:'#1C1C1C',
		height:265,
		width: 325,
		alignSelf: 'center',
		marginTop:300,
		borderWidth: 1,
		borderColor:'#fff',
		
	},
	modaltext:{
		color:'#fff',
		fontSize:26,
		textAlign:'center',
		marginTop:6,
		marginLeft:6,
		marginRight:6,
	},

	row:{
		flexDirection: 'row',
	},

	modalbutton:{
		paddingTop:20,
		paddingRight:16,
		width: 170,
		marginTop:30,

	},
	modaltextbutton:{
		fontSize:25,
		paddingTop: 10,
		color: 'black',
		textAlign:'center'
	},
	
	modalviewbutton:{
		height: 50,
		borderBottomWidth: 1,
		backgroundColor:'#f00',
		borderRadius: 10,
		marginLeft:10
	},

	modalviewbutton2:{
		height: 50,
		borderBottomWidth: 1,
		backgroundColor:'#FDE93A',
		borderRadius: 10,
		marginRight:10
	},

	imageIcon:{
		height: 40,
		width: 40,
		marginLeft:30,
		position:'absolute',
		marginTop:50
	},
	
	map:{
		backgroundColor: '#4D4DFF',
		height: 623,
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
		textAlign:'center'
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



});