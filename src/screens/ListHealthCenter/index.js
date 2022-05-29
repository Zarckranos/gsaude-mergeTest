import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import { FontAwesome } from "@expo/vector-icons";
import SearchBar from '../../components/SearchBar'
import ListItem from '../../components/ListItem';
import { useRoute } from '@react-navigation/native';
import { Container, Text } from './styles'
import styles from './styles';
import { View, FlatList } from "react-native";
import jsonData from './fakeHealthCenterData.json'
import { ZoomButton } from '../../components/Minimap/styles';

const ListHealthCenter = () => {
    const route = useRoute()
    const [searchPhrase, setSearchPhrase] = useState(route.params.healthCenter);
    const [clicked, setClicked] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const renderItem = ({item}) => {
        return <ListItem data={item}/>
    };

    const fakeData = jsonData.filter(x => x.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")))

    const handleEmpty = () => {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
                <FontAwesome
                    name="exclamation"
                    size={40}
                    color="lightgrey"
                />
                <Text style={{marginLeft:0}}>Não foram encontrados resultados {'\n'} para sua pesquisa.</Text>
            </View>
        ); 
    }; 

    return (
        <Container>
            <SearchBar
                placeholderPhrase="Pesquisar novo posto de saúde"
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />

            <View style={styles.list__container}> 
                <FlatList
                    data={fakeData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={handleEmpty}
                />
            </View> 
        </Container>
    )
}

export default ListHealthCenter