import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native';


export default class T26_PerfilMotorista extends React.Component {
		constructor(props) {
    	super(props);

  		this.state = {
        isVisible: false,

    	};
 	 }
  	render() {


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

							<Text style={styles.modaltext}>Deseja ligar para o motorista?</Text>

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
					       								Ligar
					       					</Text>

					       				</View>
					       			</TouchableOpacity>
				       	</View>

					</View>
				</View>	
       	 	</Modal>


			
				<TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
					<Image
					 source={require('../img/seta.png')}
					 style={styles.imageIcon}
					 />	 
				</TouchableOpacity>

				<View style={styles.row}>

					<Image
					 	source={require('../img/avatar.png')}
					 	style={styles.avatar}
						 />	

						<View>
							<Text style={styles.name}>Gean Victor</Text>

								<View style={styles.row}>
									<Image
										 source={require('../img/star.png')}
										 style={styles.star}
										 />

									<Text style={styles.estrelas}>5,0</Text>
								</View>

						</View>

							<TouchableOpacity onPress={() => {this.setState({ isVisible: true })}}>
								<Image
								 source={require('../img/ligar.png')}
								 style={styles.ligar}
								 />	 
							</TouchableOpacity>

				</View>

					<Text style={styles.titleVeiculo}>Veículo</Text>
					<Text style={styles.modelo}>Yamaha Fazer 250 ABS</Text>
					<Text style={styles.modelo}>ABC 1234 - Azul</Text>
					<Text style={styles.titleDoc}>Documentos</Text>

						<View style={styles.row}>

							<View>
								<Image
									 source={require('../img/docs.png')}
									 style={styles.docs}
									 />
								 <Text style={styles.docname}>Documento</Text>
							</View>

							<View>
								<Image
									 source={require('../img/docs.png')}
									 style={styles.docs}
									 />
								 <Text style={styles.docname}>Documento</Text>
							</View>

							<View>
								<Image
									 source={require('../img/docs.png')}
									 style={styles.docs}
									 />
								 <Text style={styles.docname}>Documento</Text>
							</View>

							<View>
								<Image
									 source={require('../img/docs.png')}
									 style={styles.docs}
									 />
								 <Text style={styles.docname}>Documento</Text>
							</View>

						</View>

						<Text style={styles.titlecoment}>Comentários</Text>
						<View style={styles.coment}>
						<FlatList
					        data={DATA}
					        renderItem={({ item }) => <Item title={item.title} />}
					        keyExtractor={item => item.id}
					      />
					      </View>

			</View>
			)
		}
	}
	
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Excelente viagem muito rapido e cuidadoso',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Top',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'motorista mal educado e corre demais, fiquei com medo de cair a qualquer momento',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.coments}>{title}</Text>
    </View>
  );
}




const styles = StyleSheet.create({
	modalbackground:{
			backgroundColor: 'rgba(0,0,0,0.7)',
			flex:1
	},

	modalstyle:{
		backgroundColor:'#1C1C1C',
		height:200,
		width: 290,
		alignSelf: 'center',
		marginTop:300,
		borderWidth: 1,
		borderColor:'#fff',
		
	},
	modaltext:{
		color:'#fff',
		fontSize:30,
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
		paddingRight:13,
		width: 150,
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
	row:{
		flexDirection: 'row',
	},
	avatar:{
		height:120,
		width:120,
		marginLeft:20,
		marginTop:40
	},
	star:{
		height:25,
		width:25,
		marginLeft:22
	},
	estrelas:{
		fontSize:20,
		color:'#fff',
		marginLeft:5,
		marginTop:3
	},
	name:{
		fontSize:30,
		color:'#fff',
		marginLeft:20,
		marginTop:60,
		fontWeight:'bold'
	},
	
	ligar:{
		height:50,
		width:50,
		marginTop:105,
		marginLeft:10,


	},
	titleVeiculo:{
		fontSize:30,
		color:'#FDE93A',
		marginLeft:20,
		marginTop:30
	},
	modelo:{
		fontSize:20,
		color:'#fff',
		marginLeft:20,
		marginTop:5,
	},
	titleDoc:{
		fontSize:30,
		color:'#FDE93A',
		marginLeft:20,
		marginTop:15
	},
	docs:{
		height:95,
		width:75,
		marginTop:10,
		marginLeft:25,
		
	},
	docname:{
		color:'#fff',
		marginLeft:25,
		marginTop:5
	},
	titlecoment:{
		fontSize:30,
		color:'#FDE93A',
		marginLeft:20,
		marginTop:20,

	},
	coment:{
		paddingRight:20,
		marginLeft:20,
	},
	item: {
		marginVertical:10,
		borderBottomWidth: 0.5,
	    borderBottomColor: '#fff',

  },
	 coments: {
	    fontSize: 20,
	    color:'#fff',
		marginBottom:5,
  },

})

