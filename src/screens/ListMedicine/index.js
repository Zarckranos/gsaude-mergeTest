import React, {useRef, useState, useEffect} from 'react'
import Header from '../../components/Header'
import MedicineItem from '../../components/MedicineItem'
import { FlatList } from "react-native";
import mockData from './mockData.json';
import { useNavigation, useRoute } from '@react-navigation/native';
import UpdateMedicineModal from '../../components/Modals/UpdateMedicineModal';
import {
  Container
} from './styles'



const ListMedicine = () => {
  const [name, setName] = useState("Teste");
  const [availableQuantity, setAvailableQuantity] = useState("Teste");
  const modalizeRef = useRef(null);

  const openUpdateMedicineModal = ({name, availableQuantity}) => {
     modalizeRef.current?.open()
     setName(name)
     setAvailableQuantity(availableQuantity)
  };

  return (
    <Container>
      <Header title={"Lista de remédios"} />
      <FlatList
        data={mockData}
        renderItem={({item}) => {return <MedicineItem data={item} openModal={openUpdateMedicineModal} />}}
        keyExtractor={(item, index) => { return index.toString()}}
     /> 

      <UpdateMedicineModal modalizeRef={modalizeRef} name={name} availableQuantity={availableQuantity} />
    </Container>
  )
}

export default ListMedicine
