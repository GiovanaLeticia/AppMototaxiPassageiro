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
        <Stack.Screen name="T08_EnviaLinkRecuperacao" component={T08_EnviaLinkRecuperacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;