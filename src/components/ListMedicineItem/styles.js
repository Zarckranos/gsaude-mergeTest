import styled from "styled-components/native";

export const Container = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #D3D3D3;
    margin-left: 25px;
    margin-right: 25px;
    padding-bottom: 10px;
    justify-content: space-between;
    flex-direction: row;
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
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;
    padding-left: 5px;
`

export const LocationButton = styled.TouchableOpacity`
    border: 1px solid #D6D6D6;
    padding: 5px;
    border-radius: 10px;
    width: 43px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    bottom: 10px;
`

export const NotificationButton = styled.TouchableOpacity`
    border: 1px solid #D6D6D6;
    padding: 5px;
    margin-right: 50px;
    border-radius: 10px;
    width: 43px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0px;
    bottom: 10px;
`