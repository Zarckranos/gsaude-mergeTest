import React from 'react'
import { useState } from 'react'
import {
  Container,
  QuantityTextInput,
  IncreaseButton,
  DecreaseButton,
  Text
} from './styles'
import { AntDesign } from '@expo/vector-icons';

const Counter = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const handleChange = (event) => {
        setQuantity(event.target.value)
    }

    return (
        <Container>
            <IncreaseButton onPress={() => {increaseQuantity()}}>
                <AntDesign name="pluscircle" size={40} color="#42B448"/>
            </IncreaseButton>
            <QuantityTextInput  onChange={handleChange} value={quantity.toString()}/>
            <DecreaseButton
                onPress={() => {decreaseQuantity()}}
            >
                <AntDesign name="minuscircle" size={40} color="#42B448"/>
            </DecreaseButton>
        </Container>
    )
}

export default Counter