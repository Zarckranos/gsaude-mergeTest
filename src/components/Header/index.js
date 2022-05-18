import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  BackButton,
  Title
} from './styles'

const Header = () => {
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={30} color={"#000"} />
      </BackButton>
      <Title>{route.params?.screenName}</Title>
    </Container>
  )
}

export default Header