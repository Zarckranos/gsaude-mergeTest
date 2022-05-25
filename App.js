import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { toastConfig } from './src/configs/toastConfig';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
      <StatusBar color="#000"/>
      <Routes />
      <Toast 
        position='bottom'
        bottomOffset={20}
        config={toastConfig}
      />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default App
