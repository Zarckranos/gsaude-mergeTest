import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native'

import {
  Container,
  ZoomButton
} from './styles'

const { width } = Dimensions.get('screen')

const Minimap = ({ data }) => {
  const {latitude, longitude} = data
  const navigation = useNavigation()

  return (
    <Container>
      <MapView
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: '100%', 
          height: '100%', 
          zIndex:0,
        }}
        zoomEnabled={true}
        minZoomLevel={18}
      >
        <Marker coordinate={{latitude,longitude}}/>
      </MapView>
      <ZoomButton activeOpacity={0.7} width={width} onPress={() => navigation.navigate('Fullmap',{latitude,longitude})}>
          <Ionicons name="scan" size={30} color="#fff"/>
        </ZoomButton>
    </Container>
  )
} 

export default Minimap