import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  Backbutton
} from './styles'

const { width, height } = Dimensions.get('screen')


const Fullmap = () => {
  const route = useRoute()
  const navigation = useNavigation()

  let data = {
    key: 123,
    coords: {
      latitude: route.params?.latitude,
      longitude: route.params?.longitude,
    }
  }

  return (
    <Container>
      <Backbutton activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#fff"/>
      </Backbutton>
      <MapView
        region={{
          latitude: route.params?.latitude,
          longitude: route.params?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{width: width, height: height, zIndex:0}}
        zoomEnabled={true}
        minZoomLevel={17}
      >
        <Marker coordinate={data.coords}/>
      </MapView>
    </Container>
  )
}

export default Fullmap