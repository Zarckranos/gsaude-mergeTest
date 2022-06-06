import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const SearchBarView = styled.View`
    padding: 10px;
    flexDirection: row;
    background-color: #DDDDDD;
    border-radius: 10px;
    align-items: center;
    justify-content: space-evenly;
`

export const SearchInput = styled.TextInput`
    font-size: 16px;
    margin-left: 10px;
    width: 90%;
    color: #929090;
`