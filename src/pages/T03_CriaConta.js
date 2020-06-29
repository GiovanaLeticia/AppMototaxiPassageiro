import React from 'react';
import { Text, View, StyleSheet,Image, Button,TextInput } from 'react-native';
import {IMaskTextInput} from 'react-native-imask';

export default class T03_CriaConta extends React.Component {
  render() {
    return (
      <View style={styles.fundo}>
      <Text style={styles.titulo}>Crie sua Conta</Text>
      <TextInput
       style={styles.input}
       placeholder="Nome" />
      <TextInput
       style={styles.input}
       placeholder="Sobrenome"/>
      <TextInput
       style={styles.input}
       placeholder="Email"/>
      <TextInput
       style={styles.input}
       placeholder="Senha"
       minLength={8}
       secureTextEntry/>
      <TextInput
       style={styles.input}
       minLength={8}
       placeholder="Confirme sua Senha"
       secureTextEntry/>
      <Text style={styles.conta}>CPF</Text>
      <IMaskTextInput style={styles.cpf}
        mask={'000.000.000-00'}
        keyboardType = 'numeric'
        radix="."
        value=""
        placeholder="000.000.000-00"
        unmask={true}
        onAccept={
          (value, mask) => console.log(value)}
      />
      <Text style={styles.conta}>Nascimento</Text>
      <IMaskTextInput style={styles.cpf}
        mask={Date}
        keyboardType = 'numeric'
        radix="."
        value=""
        placeholder="DD.MM.AAAA"
        unmask={true}
        onAccept={
          (value, mask) => console.log(value)}
      />
      <View style={styles.botao}>
        <Button
            onPress={() => this.props.navigation.navigate('T04_Celular')}
            title="Cadastrar"
            color="#ffe500"
          /></View>
      <Text style={styles.texto}>Ao se cadastrar você concorda com nossos</Text>
      <Text style={styles.link}> Termos de Uso e Políticas de Privacidade</Text>
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
    marginTop:50,
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

  cpf:{
    marginBottom:10,
    backgroundColor:'#ffffff',
    borderColor:'#bfbbbb',
    borderRadius:5,
    borderWidth:1,
    marginLeft:170,
    marginRight:30,
    height:40,
    fontSize:22,
    marginTop:-30,
    paddingLeft:15,
  },

  conta:{
      color:'#ffffff',
      fontSize:22,
      marginLeft:30,
      position:'relative',
      bottom:-5,
     },

  botao:{
    paddingLeft:100,
    paddingRight:100,
    fontSize:35,
  }
});