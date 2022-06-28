import React, { useEffect } from 'react'

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
import PDFView from '../screens/PDFView'

import api from '../services/api'
import { Alert } from 'react-native'
import { AuthContext } from '../providers/user/context'

const Stack = createNativeStackNavigator()

const Routes = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          ...action.id,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          ...action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          ...action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async (email, password) => {
      let userToken = null
      let user = null ;
      try {
        if(password.trim() != '' || email != '') {
          const response = await api.get('/user/login', { email, password })
          if (response.data != null) {
            userToken = 'bbb'
            user = response.data
            await AsyncStorage.setItem('userToken', userToken)
            await AsyncStorage.setItem('gsaude@user', JSON.stringify(user))
          }else {
            Alert.alert('Temos um problema !','Usuário ou senha inválido.', [{text: 'OK'}])
          }
        }else {
          Alert.alert('Temos um problema !','você precisa preencher todos os campos.', [{text: 'OK'}])
        }
      } catch (error) {
        console.log(error)
      }
      dispatch({ type: 'LOGIN', id: user, token: userToken })
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('gsaude@user')

      } catch (err) {
        console.log(err)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: async(name, userName, bio, password, avatar) => {
      // let userToken = null
      // let newUser = null
      // try {
      //   const response = await api.post('/user/newUser',{name, userName, bio, password, avatar})
      //   if(response.data != null) {
      //     userToken = 'bbb'
      //     newUser = response.data
      //     await AsyncStorage.setItem('userToken', userToken)
      //     await AsyncStorage.setItem('BOOOKs@user', JSON.stringify(newUser))
      //   }
      // }catch(error) {
      //   console.log(error)
      // }

      // dispatch({ type: 'LOGIN', id:newUser, token: userToken });

    }
  }), [])

  useEffect(async() => {
    let userToken = null
    try {
      userToken = await AsyncStorage.getItem('userToken')
      user = await AsyncStorage.getItem('gsaude@user')

    } catch (err) {
      console.log(err)
    }
    dispatch({ type: 'RETRIVE_TOKEN', id:JSON.parse(user), token: userToken })
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        signIn: authContext.signIn, 
        signOut: authContext.signOut,
        user: loginState}} >

      {loginState.userToken != null ? (
        <Stack.Navigator>
          <Stack.Screen 
            name="Apresentation"
            component={Apresentation}
            options={{
              headerShown:false
           }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen 
            name="Apresentation"
            component={Apresentation}
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
      )}
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="Apresentation"
          component={Apresentation}
          options={{
            headerShown:false
          }}
        /> */}
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
          name="PDFView"
          component={PDFView}
          options={{
            title:'Bula'
          }}
        />
        
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

export default Routes