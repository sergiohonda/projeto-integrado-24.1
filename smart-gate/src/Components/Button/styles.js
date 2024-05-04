import styled from "styled-components/native";
import { screenWidth, screenHeight } from "../../Constants/constants";

export const Container = styled.TouchableOpacity`
  width: ${(props) => props.width * screenWidth};
  height: ${(props) => screenHeight * props.height}px;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 5)}px;
  background-color: ${(props) => props.background};
  align-self: center;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin-bottom: ${(props) => screenHeight * props.marginBottom}px;
`;

export const Text = styled.Text`
  color: ${(props) => {
    return props.textColor ? props.textColor : "black";
  }};
  font-size: ${(props) => props.fontSize || 25}px;
  font-weight: ${(props) => props.fontWeight || "bold"};
  align-self: center;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
