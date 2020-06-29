import React from 'react';
import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity } from 'react-native';

export default class T05_ValidaCelular extends React.Component {
  render() {
    return (
        <View style={styles.viewofall}>
        <Text style={styles.text}>Digite o código de verificação enviado por SMS</Text>
            <View style={styles.inputflex}>
                <TextInput style={styles.Input} 
                    keyboardType = 'numeric'
                    maxLength={1}
                    />
                <TextInput style={styles.Input} 
                    keyboardType = 'numeric'
                    maxLength={1}
                    />
                <TextInput style={styles.Input} 
                    keyboardType = 'numeric'
                    maxLength={1}
                    />
                <TextInput style={styles.Input} 
                    keyboardType = 'numeric'
                    maxLength={1}
                    />
                <TextInput style={styles.Input} 
                    keyboardType = 'numeric'
                    maxLength={1}
                    />
                <TextInput style={styles.Input} 
                    keyboardType = 'numeric'
                    maxLength={1}
                    />
              </View>
          <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('T06_BoasVindas')}}>
               <View style={styles.viewbutton}>
                   <Text style={styles.textbutton}>
                           Verificar
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
		marginLeft:10,
		backgroundColor: 'white',
		paddingLeft:18,
		width: 55, 
		height: 60,
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