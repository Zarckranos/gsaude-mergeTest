import React from 'react'
import Badge from '../Badget';
import { Ionicons } from '@expo/vector-icons'
import { Container, ListTitle, Box, LocationButton, NotificationButton, Buttons } from './styles';

function chooseBadge (situation, availableQuantity, date) {
    switch(situation){
        case "available" :
            return (
                <Badge name={`${availableQuantity} unidades disponíveis`} type="available"/>
            )

        case "missing" :
            return (
                <Badge name="Em falta" type="missing"/>
            )

        case "coming" :
            return (
                <Badge name={`Chega dia ${date}`} type="coming"/>
            )
    }
}

function notification (situation) {
    switch(situation) {
        case "coming":
            return (
                <NotificationButton>
                    <Ionicons
                        name="notifications"
                        size={27}
                        color='#A8A79D'
                    />
                </NotificationButton>
            )
        default:
    }
}

const ListItem = ({ data }) => {
    const { posto, situation, availableQuantity, date } = data
    
    return (
        <Container> 
            <Box>
                <ListTitle numberOfLines={2}>{posto}</ListTitle> 
                {chooseBadge(situation, availableQuantity, date)}
            </Box>


            <Buttons>
                {notification(situation)}
                
                <LocationButton>
                    <Ionicons name="location-sharp" size={27} color="#FF0000" />
                </LocationButton>

            </Buttons>
        </Container>
    )
}
  
export default ListItem