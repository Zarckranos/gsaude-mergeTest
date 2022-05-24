import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 190px;
`

export const ZoomButton = styled.TouchableOpacity`
  background-color: #AAA4A4;
  position: absolute;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => `140px 0px 30px ${props.width*0.85}px`};
`