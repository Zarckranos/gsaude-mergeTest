import { StyleSheet } from "react-native";
import styled from "styled-components/native";


export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-end;
`

const styles = StyleSheet.create({
    container:{
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        width: "90%",
    },
    cancelText: {
        color:"red",
        fontSize: 20,
        textAlign: "right"
    },
    buttonView:{
        marginLeft:10,
        width: 65,
    },
});

export default styles;