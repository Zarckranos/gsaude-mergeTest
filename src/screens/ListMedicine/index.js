import React, {useRef, useState, useEffect} from 'react'
import Header from '../../components/Header'
import MedicineItem from '../../components/MedicineItem'
import { FlatList } from "react-native";
import mockData from './mockData.json';
import { useRoute } from '@react-navigation/native';
import UpdateMedicineModal from '../../components/Modals/UpdateMedicineModal';
import {
  Container
} from './styles'

import { Container, EmptySearch, EmptySearchText, ResultsText, ListContainer, BackButton, Header} from './styles'
import { MaterialIcons } from '@expo/vector-icons';

import { useRoute, useNavigation } from '@react-navigation/native';

const ListMedicine = () => {
  const route = useRoute()

  const [name, setName] = useState("Teste");
  const [search, setSearch] = useState(route.params.medicine)
  const [situation, setSituation] = useState(route.params?.situation);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [filteredDataSource, setFilteredDataSource] = useState(route.params?.filteredDataSource);

  const modalizeRef = useRef(null);

  const openUpdateMedicineModal = (name, availableQuantity) => {
     modalizeRef.current?.open()
     setName(name)
     setAvailableQuantity(availableQuantity)
  };

  const filterSituationFunction = (situation, medicine) => {
    if (situation) {
      const newData = mockData.filter(item => item.situation === situation);
      setFilteredDataSource(newData)
    } else if (medicine) {
      const newData = mockData.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase().trim() : ''.toUpperCase();
        const textData = medicine.toUpperCase().trim();
        return itemData.indexOf(textData) > -1;
    });
      setFilteredDataSource(newData)
    } else {
      setFilteredDataSource(mockData)
    }
  }

  useEffect(() => {
    filterSituationFunction(situation, search)
  }, [situation, search]);

  return (
    <Container>
      <Header title={"Lista de remédios"} />
      <FlatList
        data={filteredDataSource}
        renderItem={({item}) => {return <MedicineItem data={item} openModal={openUpdateMedicineModal} />}}
        keyExtractor={(item, index) => { return index.toString()}}
     /> 

      <UpdateMedicineModal modalizeRef={modalizeRef} name={name} availableQuantity={availableQuantity} />
    </Container>
  )
}

export default ListMedicine
