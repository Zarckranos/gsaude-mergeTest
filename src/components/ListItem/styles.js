import styled from "styled-components/native";

export const Container = styled.View`
    margin: 5px;
    border-bottom-width: 1px;
    border-bottom-color: #D3D3D3;
    margin-left: 25px;
    margin-right: 25px;
`

export const ListTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const ListDistance = styled.Text`
    font-size: 14px;
    margin-bottom: 5px;
`
    
export const LocationButton = styled.TouchableOpacity`
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 5px;

`