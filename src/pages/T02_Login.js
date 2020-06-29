import React from 'react';
import { Text, View, StyleSheet, Button,TextInput } from 'react-native';

export default class T02_Login extends React.Component {
  render() {
    return (
      <View style={styles.fundo}>
        <Text style={styles.titulo}>Entre com sua Conta</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"        
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry               
        />

        <Text style={styles.texto}>Esqueceu sua senha?</Text>
        <Text style={styles.link} onPress={() => this.props.navigation.navigate('T07_RecuperaSenha')}> Recupere Aqui</Text>
        <View style={styles.botao}><Button
              title="Entrar"
              color="#ffe500"
            /></View>
        <View style={styles.botao}><Button
              title="Entrar com o Facebook"
              color="#00067d"
            /></View>
        <View style={styles.botao}><Button
              title="Entrar com o Google"
              color="#c2c2c2"
            /></View>
        <Text style={styles.texto}>Ainda não possui conta?Para criar uma</Text><Text style={styles.link} onPress={() => this.props.navigation.navigate('T03_CriaConta')}> Clique Aqui</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
    fundo: {
      backgroundColor:'#000000',
      flex:1,
    },

    titulo: {
      marginTop: 50,
      marginBottom:30,
      color:'#ffffff',
      fontSize: 30,
      textAlign: 'center',
    },

    texto: {
      marginTop:10,
      color:'#ffffff',
      fontSize: 15,
      textAlign: 'center',
    },

    link: {
      color:'#ffe500',
      fontSize: 15,
      textAlign: 'center',
      textDecorationLine:'underline',
      marginBottom:10,

    },

    input:{
      marginBottom:10,
      backgroundColor:'#ffffff',
      borderColor:'#bfbbbb',
      borderRadius:5,
      borderWidth:1,
      marginLeft:30,
      marginRight:30,
      height:40,
      fontSize:22,
      paddingLeft:15,
    },

    botao:{
      paddingLeft:100,
      paddingRight:100,
      marginBottom:10,  
    },

	});