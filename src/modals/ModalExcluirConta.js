constructor(props) {
    	super(props);

  		this.state = {
        isVisible: false,

    	};

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

							<Text style={styles.modaltext}>Deseja mesmo excluir sua conta? Não será possível recuperar após confirmar.</Text>
							<TextInput style={styles.modaltextinput}
							placeholder='Excluir'
							/> 
							<Text style={styles.textexcluir}>Digite “excluir” para continuar</Text>
							
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


const styles = StyleSheet.create({
	modalbackground:{
			backgroundColor: 'rgba(0,0,0,0.7)',
			flex:1
	},

	modalstyle:{
		backgroundColor:'#1C1C1C',
		height:275,
		width: 300,
		alignSelf: 'center',
		marginTop:300,
		borderWidth: 1,
		borderColor:'#fff',
		
	},
	modaltext:{
		color:'#fff',
		fontSize:25,
		textAlign:'center',
		marginTop:6,
		marginLeft:6,
		marginRight:6,
	},
	modaltextinput:{
		backgroundColor:'#fff',
		height:50,
		width:170,
		alignSelf:'center',
		fontSize:25,
		paddingLeft:50,
		borderRadius: 10,
		marginTop:20,
	},
	textexcluir:{
		color:'#fff',
		fontSize:18,
		textAlign:'center',
		marginTop:5
	},

	row:{
		flexDirection: 'row',
	},

	modalbutton:{
		marginTop:20,
		paddingLeft:8,
		paddingRight:8,
		width: 150,
		

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