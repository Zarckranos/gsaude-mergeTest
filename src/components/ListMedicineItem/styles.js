import styled from "styled-components/native";

export const Container = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #D3D3D3;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
`

export const Box = styled.View`
    align-self: flex-start;
    flex-shrink: 1;
`

export const ListTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const Buttons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
`

export const LocationButton = styled.TouchableOpacity`
    display: flex;    
    border: 1px solid #D6D6D6;
    padding: 5px;
    border-radius: 10px;
    width: 43px;
    height: 40px;
    align-items: center;
    justify-content: center;
    bottom: 10px;
`

export const NotificationButton = styled.TouchableOpacity`
    display: flex;
    border: 1px solid #D6D6D6;
    padding: 5px;
    margin: 3px;
    border-radius: 10px;
    width: 43px;
    height: 40px;
    align-items: center;
    justify-content: center;
    bottom: 10px;
`