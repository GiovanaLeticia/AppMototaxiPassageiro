import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default class T01_Abertura extends React.Component {
  
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('T02_Login');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.fundo}>
        <Image source={require('../img/logo.png')} style={styles.image}/>
        <ActivityIndicator style={styles.load} size="large" color="#ffe500" />
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
      width:300,
      height:300,
      marginTop:100,
  },

  load:{
      marginTop:200,
  }
});