constructor(props) {
    	super(props);

  		this.state = {
        isVisible: false,

    	};
 	 }




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

							<Text style={styles.modaltext}>Deseja mesmo sair do app?</Text>

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