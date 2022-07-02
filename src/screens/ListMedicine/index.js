import React, { useState, useEffect } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import SearchBar from '../../components/SearchBar'
import { FlatList } from "react-native";
import ListMedicineItem from '../../components/ListMedicineItem';
import api from '../../services/api'

import { Container, EmptySearch, EmptySearchText, ResultsText, ListContainer, BackButton, Header} from './styles'
import { MaterialIcons } from '@expo/vector-icons';

import { useRoute, useNavigation } from '@react-navigation/native';

const ListMedicine = () => {
  	const route = useRoute()
  	const navigation = useNavigation()
	  
  	const [search, setSearch] = useState(route.params.medicine)
  	const [isVisible, setIsVisible] = useState(true);

	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [shouldCrossIconShow, setShouldCrossIconShow] = useState(true);
	 
	const searchFilterFunction = async(text) => {
		if(text.trim() != '') {
			try {
				const medicine = await api.get(`medicine/${text}`)
	
				if(medicine.data.type == "success") {
					const inventory = medicine.data.data.inventory

					inventory.length === 0 ? setIsVisible(false) : setIsVisible(true);
					setFilteredDataSource(inventory);
					setSearch(text);
					setShouldCrossIconShow(true);
				} else {
					setFilteredDataSource([]);
					setSearch(text);
					setShouldCrossIconShow(false);
					setIsVisible(false);
				}
			} catch(err) {
				console.log('tente mais tarde')
			}
		} else {
			setFilteredDataSource([]);
            setSearch(text);
            setShouldCrossIconShow(false);
            setIsVisible(false);
		}
		
        //if (text) {
        //    const newData = jsonData.filter(function (item) {
        //        const itemData = item.medicine ? item.medicine.toUpperCase().trim() : ''.toUpperCase();
        //        const textData = text.toUpperCase().trim();
        //        return itemData.indexOf(textData) > -1;
        //    });
        //    newData.length === 0 ? setIsVisible(false) : setIsVisible(true);
        //    setFilteredDataSource(newData);
        //    setSearch(text);
        //    setShouldCrossIconShow(true);
        //} else {
        //    setFilteredDataSource(jsonData);
        //    setSearch(text);
        //    setShouldCrossIconShow(false);
        //    setIsVisible(false);
        //}
    };

  	const renderItem = ({item}) => {
    	return ( 
      		<ListMedicineItem data={item}/>
    	);
  	};

	const isSearchEmpty = () => {
		if(search.trim() == '') {
			return (
				<EmptySearchText>Campo de busca vazio.</EmptySearchText>
			)
		}
		
		return (
			<EmptySearchText>Não foram encontrados resultados {'\n'} para sua pesquisa.</EmptySearchText>
		)
	}

  	const handleEmpty = () => {
    	return (
      		<EmptySearch>
        		<FontAwesome
          			name="exclamation"
					size={40}
					color="#9C9C9C"
        		/>

        		{isSearchEmpty}
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
						placeholderPhrase="Pesquisar novo remédio"
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

export default ListMedicine