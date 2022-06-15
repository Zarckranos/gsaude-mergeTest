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

const renderItem = ({item}) => {
  return (
    <MedicineItem data={item} />
  );
};


const ListMedicine = () => {
  const route = useRoute();
  const [showModal, setShowModal] = useState(false);
  const modalizeRef = useRef(null);
  
  useEffect(() => {
    setShowModal(route.params?.showModal)
  }, [])
  
  function onOpen() {
    modalizeRef.current?.open()
  }
   
  return (
    <Container>
      <Header title={"Lista de remédios"} />
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item, index) => { return index.toString()}}
      />
      {showModal ? onOpen() : null}
      <UpdateMedicineModal modalizeRef={modalizeRef} name={route.params?.name} availableQuantity={route.params?.availableQuantity}/>
    </Container>
  )
}

export default ListMedicine