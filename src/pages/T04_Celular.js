import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class T04_Celular extends React.Component {
  render() {
    return (
        <View style={styles.viewofall}>
        <Text style={styles.text}>Qual o número do seu telefone celular?</Text>
            <View style={styles.inputflex}>
    
                  <TextInput style={styles.Input} keyboardType = 'numeric'
                    maxLength = {2}
                    placeholder= "99"
                />
                <TextInput style={styles.Input2} keyboardType = 'numeric'
                    maxLength = {9}
                    placeholder= "98765-4321"
                />
            </View>
          <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T05_ValidaCelular')}}>
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
		marginTop:35,
		fontSize:40,
		color: 'white',
		alignSelf: 'center',

	},
	Input:{
		color:'black',
		marginTop:10,
		marginLeft:15,
		backgroundColor: 'white',
		padding:10,
		width: 60, 
		height: 50,
		fontSize:30,
		borderRadius: 10,
	},
	Input2:{
		color:'black',
		marginTop:10,
		marginLeft:15,
		backgroundColor: 'white',
		padding:10,
		width: 300, 
		height: 50,
		fontSize:30,
		borderRadius: 10,
	},
	viewbutton:{
		height: 50,
		borderBottomWidth: 1,
		alignItems: 'center',
		backgroundColor:'#FDE93A',
		borderRadius: 10, 
	},
	textbutton: {
		fontSize:25,
		paddingTop: 12,
		color: 'black'

	},
	button:{
		padding:20,
		margin:10,
		width: 200, 
		alignSelf: 'center',
	},
	inputflex:{
		flexDirection: 'row',
	},
	viewofall:{
		paddingTop: 50,
		backgroundColor:'#000000',
		flex: 1
	},
});