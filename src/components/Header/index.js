import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  BackButton,
  Title
} from './styles'

const Header = ({title}) => {
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={30} color={"#000"} />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  )
}

export default Header