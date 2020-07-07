import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import T01_Abertura from './src/pages/T01_Abertura';
import T02_Login from './src/pages/T02_Login';
import T03_CriaConta from './src/pages/T03_CriaConta';
import T04_Celular from './src/pages/T04_Celular';
import T05_ValidaCelular from './src/pages/T05_ValidaCelular';
import T06_BoasVindas from './src/pages/T06_BoasVindas';
import T07_RecuperaSenha from './src/pages/T07_RecuperaSenha';
import T08_EnviaLinkRecuperacao from './src/pages/T08_EnviaLinkRecuperacao';
import T12_ValorViagem from './src/pages/T12_ValorViagem'
import T13_Troco from './src/pages/T13_Troco'
import T14_ValorTroco from './src/pages/T14_ValorTroco'
import T15_ConfirmaçaoLocal from './src/pages/T15_ConfirmaçaoLocal'
import T20_FinalizaçaoViagem from './src/pages/T20_FinalizaçaoViagem'
import T21_Comentário from './src/pages/T21_Comentário'
import T26_PerfilMotorista from './src/pages/T26_PerfilMotorista'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="T01_Abertura" component={T01_Abertura} />
        <Stack.Screen name="T02_Login" component={T02_Login} />
        <Stack.Screen name="T03_CriaConta" component={T03_CriaConta} />
        <Stack.Screen name="T04_Celular" component={T04_Celular} />
        <Stack.Screen name="T05_ValidaCelular" component={T05_ValidaCelular} />
        <Stack.Screen name="T06_BoasVindas" component={T06_BoasVindas} />
        <Stack.Screen name="T07_RecuperaSenha" component={T07_RecuperaSenha}
          options={{
            title: '',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000000',
              shadowColor: 'transparent'
            },
            headerTintColor: '#FDE93A',
            headerBackTitle: null,
            headerTruncatedBackTitle: '',
           }} />
        <Stack.Screen name="T12_ValorViagem" component={T12_ValorViagem}/>
        <Stack.Screen name="T13_Troco" component={T13_Troco}/>
        <Stack.Screen name="T14_ValorTroco" component={T14_ValorTroco}/>
        <Stack.Screen name="T15_ConfirmaçaoLocal" component={T15_ConfirmaçaoLocal}/>
        <Stack.Screen name="T20_FinalizaçaoViagem" component={T20_FinalizaçaoViagem}/>
        <Stack.Screen name="T21_Comentário" component={T21_Comentário}/>
        <Stack.Screen name="T26_PerfilMotorista" component={T26_PerfilMotorista}/>
        <Stack.Screen name="T08_EnviaLinkRecuperacao" component={T08_EnviaLinkRecuperacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;