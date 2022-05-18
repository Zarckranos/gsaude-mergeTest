import React from 'react'

import {
  Button,
  Text
} from './styles'

const DefaultButton = ({ name, action }) => {
  return (
    <Button activeOpacity={0.7} onPress={action}>
      <Text>{ name }</Text>
    </Button>
  )
}

export default DefaultButton