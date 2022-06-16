import React from 'react'
import { useState, useEffect } from 'react'
import {
  Container,
  QuantityTextInput,
  IncreaseButton,
  DecreaseButton,
  Text
} from './styles'
import { AntDesign } from '@expo/vector-icons';

const CounterCopy = ({availableQuantity}) => {
    const [quantity, setQuantity] = useState("0");

    useEffect(() => {
        setQuantity(availableQuantity)
      }, [availableQuantity]);

    const increaseQuantity = () => {
        setQuantity(Number(quantity) + 1);
    }

    const decreaseQuantity = () => {
        if(Number(quantity) > 0) {
            setQuantity(Number(quantity) - 1);
        }
    }

    const handleChange = (event) => {
        setQuantity(event.target.value)
    }


    return (
        <Container>
            <DecreaseButton
                onPress={() => {decreaseQuantity()}}
            >
                <AntDesign name="minuscircle" size={40} color="#42B448"/>
            </DecreaseButton>
            <QuantityTextInput keyboardType='numeric' onChange={handleChange} value={quantity}/>
            <IncreaseButton onPress={() => {increaseQuantity()}}>
                <AntDesign name="pluscircle" size={40} color="#42B448"/>
            </IncreaseButton>
        </Container>
    )
}

export default CounterCopy