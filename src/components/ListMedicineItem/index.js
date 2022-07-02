import React from 'react'
import Badge from '../Badget';
import { Ionicons } from '@expo/vector-icons'
import { Container, ListTitle, Box, LocationButton, NotificationButton, Buttons } from './styles';

function chooseBadge (situation, amountAvailable, date) {
    switch(situation){
        case "available" :
            return (
                <Badge name={`${amountAvailable} unidades disponíveis`} type="available"/>
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
    const { name, situation, amountAvailable, date, latitude, longitude } = data
    
    return (
        <Container> 
            <Box>
                <ListTitle numberOfLines={2}>{name}</ListTitle> 
                {chooseBadge(situation, amountAvailable, date)}
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