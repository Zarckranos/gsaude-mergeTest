import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    __container:{
        margin: 5,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
        marginLeft: 15,
        marginRight: 15
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    distance: {
        fontSize: 14,
        marginBottom:5
    },
    location__icon: {
        position:'absolute', 
        right: 10, 
        borderWidth: 1, 
        borderColor:"lightgrey", 
        borderRadius: 10,
        paddingVertical:5,
        paddingHorizontal: 10,
        alignItems: "center"
    }
});

export default styles;