import React from 'react'
import Badge from '../../components/Badget'
import DefaultButton from '../../components/DefaultButton'

import {
  Container,
  Text,
} from './styles'

const SearchMedicine = () => {
  const badges = [
    {name: '50 unidades disponíveis',type: 'available'},
    {name: 'Em falta', type: 'missing'},
    {name: 'Chega dia 20/05/2022', type: 'coming'}
  ]

  return (
    <Container>
      <Text>SearchMedicine Screen</Text>
      {
        badges.map((element,index) => (
          <Badge key={index} name={element.name} type={element.type}/>
        ))
      }
    </Container>
  )
}

export default SearchMedicine