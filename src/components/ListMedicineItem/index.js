import React, { useContext } from 'react'
import Badge from '../Badget';
import Toast from 'react-native-toast-message'
import { Ionicons } from '@expo/vector-icons'
import { Container, ListTitle, Box, LocationButton, NotificationButton, Buttons } from './styles';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../providers/user/context'

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

const ListItem = ({ data }) => {
    const { name, situation, amountAvailable, date, _id } = data
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)

    const addNotification = () => {
        if (user.isLoading) {
            console.log('cadastrado')
        } else {
            Toast.show({
                type: 'warning',
                text1: 'Temos um problema !',
                text2: 'Você precisa está logado para receber notificações.'
            });
        }
    }

    const goToHealthCenter = () => {
        navigation.navigate("HealthCenter", {_id})
    }

    return (
        <Container> 
            <Box>
                <ListTitle numberOfLines={2}>{name}</ListTitle> 
                {chooseBadge(situation, amountAvailable, date)}
            </Box>

            <Buttons>
                {situation == "coming"
                    ? <NotificationButton onPress={addNotification}>
                        <Ionicons name="notifications" size={27} color='#A8A79D'/>
                      </NotificationButton> 
                    : null
                }
                
                <LocationButton onPress={goToHealthCenter}>
                    <Ionicons name="location-sharp" size={27} color="#FF0000" />
                </LocationButton>

            </Buttons>
        </Container>
    )
}
  
export default ListItem