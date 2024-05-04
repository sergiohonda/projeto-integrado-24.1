import styled from "styled-components";
import { colors, screenWidth } from "../../Constants/constants";

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const PageTitle = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: ${colors.white};
  margin: 20px 0 15px ${screenWidth * 0.05}px;
`;
