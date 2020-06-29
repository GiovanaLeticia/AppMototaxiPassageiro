import React from 'react';
import { Text, View, StyleSheet,Image, Button } from 'react-native';

export default class T08_EnviaLinkRecuperacao extends React.Component {
  render() {
    return (
        <View style={styles.fundo}>
        <Image source={require('../img/mail.png')} style={styles.image}/>
        <Text style={styles.texto}>Enviamos o link para definir sua nova senha.</Text>
        <View style={styles.botao}>
            <Button
              onPress={() => this.props.navigation.navigate('T02_Login')}
              title="Entrar Novamente"
              color="#ffe500"/>
              </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
fundo: {
  backgroundColor:'#000000',
  flex:1,
},

image: {
  alignSelf: 'center',
  width:200,
  height:200,
  marginTop: 150,
},

texto: {
  color:'#ffffff',
  fontWeight: 'bold',
  fontSize: 45,
  textAlign: 'center',
},

botao: {
  marginTop:30,
  paddingLeft: 100,
  paddingRight: 100,    
}
});