import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Apresentation from '../screens/Apresentation'
import Login from '../screens/Login'
import Home from '../screens/Home'
import HealthCenter from '../screens/HealthCenter'
import Signup from '../screens/Signup'
import Otp from '../screens/Signup/otp'
import Register from '../screens/Signup/register'
import Fullmap from '../screens/Fullmap'
import NewMedicine from '../screens/NewMedicine'
import Dashboard from '../screens/Dashboard'
import SearchMedicine from '../screens/SearchMedicine'
import ListMedicine from '../screens/ListMedicine'
import ListHealthCenter from '../screens/ListHealthCenter'
import PDFView from '../screens/PDFView'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Apresentation"
        component={Apresentation}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="SearchMedicine"
        component={SearchMedicine}
        options={{
          headerShown:false
        }}
      />
      
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          headerShown:false
        }}
      />
      
      <Stack.Screen 
        name="HealthCenter"
        component={HealthCenter}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="Signup"
        component={Signup}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="Otp"
        component={Otp}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="Register"
        component={Register}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="Fullmap"
        component={Fullmap}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="NewMedicine"
        component={NewMedicine}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="ListMedicine"
        component={ListMedicine}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="ListHealthCenter"
        component={ListHealthCenter}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="PDFView"
        component={PDFView}
        options={{
          title:'Bula'
        }}
      />
      
    </Stack.Navigator>
  )
}

export default Routes