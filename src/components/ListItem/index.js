import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { Container, ListTitle, ListDistance, LocationButton } from './styles';

const ListItem = ({ data}) => {
    const { name, distance } = data
    
    return (
        <Container> 
            <ListTitle>{name}</ListTitle>
            <ListDistance>{distance}</ListDistance>
            <LocationButton>
                <FontAwesome
                    name="map-marker"
                    size={25}
                    color="red"
                />
            </LocationButton>
        </Container>
    )
}
  
export default ListItem