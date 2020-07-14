import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class T06_BoasVindas extends React.Component {
  render() {
    return (
        <View style={styles.viewofall}>
        <Text style={styles.text}>Boas-Vindas</Text>
        <Image
            style={styles.logo}
            source={require('../img/logo.png')}
            />
        <Text style={styles.text2}>Obrigado pelo cadastro, aproveite todas as comodidades do app.</Text>

          <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T02_Login')}}>
               <View style={styles.viewbutton}>
                   <Text style={styles.textbutton}>
                           Continuar
                   </Text>
               </View>
           </TouchableOpacity>
       </View>
    );
  }
}

const styles = StyleSheet.create({
	text:{
		marginTop:30,
		fontSize:40,
		color: 'white',
		alignSelf: 'center',

	},
	text2:{
		marginTop:30,
		fontSize:30,
		color: 'white',
		alignSelf: 'center',
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
	viewofall:{
		paddingTop: 30,
		backgroundColor:'#000000',
		flex: 1
	},
	logo: {
    	width: 240,
    	height: 240,
   		marginLeft:85,
    	marginTop:25,
    },
});