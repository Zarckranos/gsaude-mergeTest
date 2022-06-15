import styled from "styled-components/native";

export const Title = styled.Text`
  color: #42B448;
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const Container = styled.View`
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
`

export const Text = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`
export const Item = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  border-color: #E3DFDF;
  border-bottom-width: 1px;
  padding-bottom: 5px ;
`

export const MapButton = styled.TouchableOpacity`
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`