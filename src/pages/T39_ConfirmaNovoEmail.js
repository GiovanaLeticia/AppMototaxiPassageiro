import React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';

export default class T39_ConfirmaNovoEmail extends React.Component {
  render() {
    return (
        <View style={styles.conteiner}>

        <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                  <Image
                   source={require('../img/seta.png')}
                   style={styles.imageIcon}
                   />  
        </TouchableOpacity>

        <Image source={require('../img/mail.png')} style={styles.imagemail}/>
        <Text style={styles.text}>Enviamos a confirmação para o seu novo e-mail.</Text>
       
          </View>
    );
  }
}

const styles = StyleSheet.create({
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
  imagemail: {
    alignSelf: 'center',
    width:200,
    height:200,
    marginTop: 100,
},

  text: {
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
},
});