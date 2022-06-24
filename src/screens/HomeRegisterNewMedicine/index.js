import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { useRoute, useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar'
import { Ionicons } from "@expo/vector-icons";
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

const HomeRegisterNewMedicine = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const [search, setSearch] = useState("")

    const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [shouldCrossIconShow, setShouldCrossIconShow] = useState(true);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = jsonData.filter(function (item) {
                const itemData = item.medicine ? item.medicine.toUpperCase().trim() : ''.toUpperCase();
                const textData = text.toUpperCase().trim();
                return itemData.indexOf(textData) > -1;
            });
            newData.length === 0 ? setIsVisible(false) : setIsVisible(true);
            setFilteredDataSource(newData);
            setSearch(text);
            setShouldCrossIconShow(true);
        } else {
            setFilteredDataSource(jsonData);
            setSearch(text);
            setShouldCrossIconShow(false);
            setIsVisible(false);
        }
    };

    const textsContainer = ({title, quantity}) => {
        return (
            <TextContainer>
                <TitleText>{title}</TitleText>
                <QuantityText>{quantity}</QuantityText>
            </TextContainer>
        );
    }

    const goToRegisterNewMedicine = () => {
        navigation.navigate("RegisterNewMedicine")
    }

    const goToListMedicine = () => {
        navigation.navigate("ListMedicine")
    }

    const logoutEmployer = () => {
        navigation.navigate("Home")
    }

    const goToListMedicineMissing = () => {
        navigation.navigate("ListMedicine",{situation:"missing"})
    }

    const goToListMedicineAvailable = () => {
        navigation.navigate("ListMedicine",{situation:"available"})
    }

    return (
        <Container>
            <WelcomeText>Seja bem-vindo,</WelcomeText>
            <UsernameText>Nome do funcionário</UsernameText>
            <SearchBarContainer>
                <SearchBar
                    placeholderPhrase="Pesquisar remédio"
                    setSearchFilter={searchFilterFunction}
                    searchPhrase={search}
                    shouldCrossIconShow={shouldCrossIconShow}
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
                    <TitleText>Total de remédios disponível:</TitleText>
                    <QuantityText>151</QuantityText>
                    <ShowMoreButton onPress={goToListMedicineAvailable}> 
                        <ShowMoreText>ver mais</ShowMoreText>
                    </ShowMoreButton>
                </TextContainer>
                <TextContainer>
                    <TitleText>Total de remédios:</TitleText>
                    <QuantityText>161</QuantityText>
                    <ShowMoreButton onPress={goToListMedicine}> 
                        <ShowMoreText>ver mais</ShowMoreText>
                    </ShowMoreButton>
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

            <LogoutButton onPress={logoutEmployer}>
                <Ionicons name="md-log-out" color="#848282" size={35}/>
                <LogoutButtonText>Sair</LogoutButtonText>
            </LogoutButton>
        </Container>
    )   
}

export default HomeRegisterNewMedicine