import React, { useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons"
import ListItem from '../../components/ListItem';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Container, EmptySearch, EmptySearchText, ResultsText, ListContainer, BackButton, Header} from './styles'
import { FlatList } from "react-native";
import jsonData from './fakeHealthCenterData.json';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import {
    BoxSearch,
    Input,
    BoxIcon
} from './styles'

const ListHealthCenter = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [searchPhrase, setSearchPhrase] = useState(route.params.healthCenter);
    const [clicked, setClicked] = useState(true);

    const renderItem = ({item, index}) => {
        return <ListItem data={item}/>
    };

    const fakeData = jsonData.filter(x => x.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")))

    const handleEmpty = () => {
        return (
            <EmptySearch>
                <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={50}
                    color="#9C9C9C"
                />
                <EmptySearchText>Não foram encontrados resultados {'\n'} para sua pesquisa.</EmptySearchText>
            </EmptySearch>
        ); 
    }; 

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
                            <MaterialIcons name="arrow-back" size={30} color="black"/>
                        </BackButton>

                        <BoxSearch>
                            <Input
                                placeholder="Pesquisar..."
                                defaultValue={searchPhrase}
                                onChangeText={(text) => setSearchPhrase(text)}
                            />
                            <BoxIcon>
                                <Feather name="search" size={25} color="#C4C4C4" />
                            </BoxIcon>
                        </BoxSearch>
                    </Header>
                    {searchPhrase.length != 0 && (
                        <ResultsText>
                            Resultados para {searchPhrase}
                        </ResultsText>
                    )}
                    

                    <ListContainer> 
                        <FlatList
                            data={fakeData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => {return index.toString()}}
                            ListEmptyComponent={handleEmpty}
                        />
                    </ListContainer> 
                </Container>
            </TouchableWithoutFeedback>
    )
}

export default ListHealthCenter