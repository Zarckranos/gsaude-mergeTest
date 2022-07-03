import React, { useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar'
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { AuthContext } from '../../providers/user/context'

import {
  Container,
  WelcomeText,
  UsernameText,
  SearchBarContainer,
  Box,
  TextContainer,
  TitleText,
  QuantityText,
  ShowMoreButton,
  ShowMoreText,
  BoxButtonsContainer,
  GoToScreenButton,
  GoToScreenImage,
  GoToScreenText,
  LogoutButton,
  LogoutButtonText
} from './styles'

const Dashboard = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");
    const { signOut, user } = useContext(AuthContext);


    const goToRegisterNewMedicine = () => {
        navigation.navigate("RegisterNewMedicine")
    }

    const goToListMedicine = () => {
        navigation.navigate("ListMedicine",{medicine:""})
    }

    const goToListMedicineMissing = () => {
        navigation.navigate("ListMedicine",{situation:"missing"})
    }

    const goToListMedicineAvailable = () => {
        navigation.navigate("ListMedicine",{situation:"available"})
    }

    const searchFilterFunction = (text) => {
        if (text) {
            setSearch(text);
        } 
    };

    const searchFilterMedicine = () => {
        navigation.navigate("ListMedicine",{medicine:search})
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <WelcomeText>Seja bem-vindo,</WelcomeText>
                <UsernameText>Nome do funcionário</UsernameText>
                <SearchBarContainer>
                    <SearchBar
                        placeholderPhrase="Pesquisar remédio"
                        searchPhrase={search}
                        setSearchFilter={searchFilterFunction}
                        shouldCrossIconShow={false}
                        goToListMedicine={searchFilterMedicine}
                    />
                </SearchBarContainer>
                <Box>
                    <TextContainer>
                        <TitleText>Remédios em falta:</TitleText>
                        <QuantityText>10</QuantityText>
                        <ShowMoreButton> 
                            <ShowMoreText onPress={goToListMedicineMissing}>ver mais</ShowMoreText>
                        </ShowMoreButton>
                    </TextContainer>
                    <TextContainer>
                        <TitleText>Remédios disponíveis:</TitleText>
                        <QuantityText>151</QuantityText>
                        <ShowMoreButton onPress={goToListMedicineAvailable}> 
                            <ShowMoreText>ver mais</ShowMoreText>
                        </ShowMoreButton>
                    </TextContainer>
                    <TextContainer>
                        <TitleText>Total de remédios:</TitleText>
                        <QuantityText>161</QuantityText>
                        {/* <ShowMoreButton onPress={goToListMedicine}> 
                            <ShowMoreText>ver mais</ShowMoreText>
                        </ShowMoreButton> */}
                    </TextContainer>
                </Box>

                <BoxButtonsContainer>
                    <GoToScreenButton onPress={goToRegisterNewMedicine}> 
                        <GoToScreenImage source={require('../../assets/medicine.png')} resizeMode="contain"/>
                        <GoToScreenText>Cadastrar novos remédios</GoToScreenText>
                    </GoToScreenButton>
                    <GoToScreenButton onPress={goToListMedicine}> 
                        <GoToScreenImage source={require('../../assets/search.png')} resizeMode="contain"/>
                        <GoToScreenText>Lista de remédios</GoToScreenText>
                    </GoToScreenButton>
                </BoxButtonsContainer>

                <LogoutButton onPress={() => signOut()}>
                    <Ionicons name="md-log-out" color="#848282" size={35}/>
                    <LogoutButtonText>Sair</LogoutButtonText>
                </LogoutButton>
            </Container>
        </TouchableWithoutFeedback>
    )   
}

export default Dashboard