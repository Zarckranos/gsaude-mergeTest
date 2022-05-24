import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  Backbutton
} from './styles'

const { width, height } = Dimensions.get('screen')


const Fullmap = () => {
  const [region, setRegion] = useState({
    latitude: -3.7279078677807744,
    longitude: -38.49296161327175,
  })
  const navigation = useNavigation()

  let data = {
    key: 123,
    coords: {
      latitude: region.latitude,
      longitude: region.longitude,
    }
  }

  return (
    <Container>
      <Backbutton activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#fff"/>
      </Backbutton>
      <MapView
        region={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{width: width, height: height, zIndex:0}}
        zoomEnabled={true}
        minZoomLevel={17}
        showsUserLocation={true}
      >
        <Marker coordinate={data.coords}/>
      </MapView>
    </Container>
  )
}

export default Fullmap