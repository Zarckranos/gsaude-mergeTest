import React, { useState, useEffect } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import SearchBar from '../../components/SearchBar'
import { FlatList } from "react-native";
import ListMedicineItem from '../../components/ListMedicineItem';
import Toast from 'react-native-toast-message'
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
		setSearch(text);
		if(text.trim() != '') {
			try {
				const medicine = await api.get(`medicine/${text}`)
	
				if(medicine.data.type == "success") {
					const inventory = medicine.data.data.inventory

					inventory.length === 0 ? setIsVisible(false) : setIsVisible(true);
					setFilteredDataSource(inventory);
					
					setShouldCrossIconShow(true);
				} else {
					setIsVisible(false);
					setFilteredDataSource([]);
					
					setShouldCrossIconShow(false);
				}
			} catch(err) {
				Toast.show({
					type: 'error',
					text1: 'Temos um problema!',
					text2: 'tente mais tarde'
				});
			}
		} else {
            setIsVisible(false);
			setFilteredDataSource([]);
            
            setShouldCrossIconShow(false);
		}
    };

  	const renderItem = ({item}) => {
    	return ( 
      		<ListMedicineItem data={item}/>
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
				
				{search == ''
					? <EmptySearchText>Campo de busca vazio.</EmptySearchText>
					: <EmptySearchText>Não foram encontrados resultados {'\n'} para sua pesquisa.</EmptySearchText>
				}
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