import React, {useState, useEffect} from 'react'
import { FontAwesome } from "@expo/vector-icons";
import ListItem from '../../components/ListItem';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Container, EmptySearch, EmptySearchText, ResultsText, ListContainer, BackButton, Header} from './styles'
import styles from './styles';
import { View, FlatList } from "react-native";
import jsonData from './fakeHealthCenterData.json';
import { ZoomButton } from '../../components/Minimap/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import SearchBar from '../../components/SearchBar';

const ListHealthCenter = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [search, setSearch] = useState(route.params.healthCenter);
    const [isVisible, setIsVisible] = useState(true);
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [shouldCrossIconShow, setShouldCrossIconShow] = useState(true);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = jsonData.filter(function (item) {
                const itemData = item.name ? item.name.toUpperCase().trim() : ''.toUpperCase();
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
    const renderItem = ({item}) => {
        return ( 
            <ListItem data={item}/>
        );
    };

    const handleEmpty = () => {
        return (
            <EmptySearch>
                <FontAwesome
                    name="exclamation"
                    size={40}
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

                        <SearchBar
                            placeholderPhrase="Pesquisar novo posto de saúde"
                            setSearchFilter={searchFilterFunction}
                            searchPhrase={search}
                            shouldCrossIconShow={shouldCrossIconShow}
                        />
                    </Header>
                    
                    {isVisible ? <ResultsText>Resultados para {search}</ResultsText> : null}
                    
                    <ListContainer> 
                        <FlatList
                            data={filteredDataSource}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => { return index.toString()}}
                            ListEmptyComponent={handleEmpty}
                        />
                    </ListContainer> 
                </Container>
            </TouchableWithoutFeedback>
    )
}

export default ListHealthCenter