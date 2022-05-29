import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import styles from './styles';

const ListItem = ({ data}) => {
    const { name, distance } = data
    
    return (
        <View>
            <View style={styles.__container}> 
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.distance}>{distance}</Text>
                    <FontAwesome
                        name="map-marker"
                        size={25}
                        color="red"
                        style={styles.location__icon}
                    />
            </View>
        </View>
    )
}
  
export default ListItem