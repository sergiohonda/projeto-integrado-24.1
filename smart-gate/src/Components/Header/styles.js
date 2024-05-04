import styled from "styled-components";
import { screenWidth, screenHeight, colors } from "../../Constants/constants";

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${screenWidth};
    margin-top: ${screenHeight * 0.08}px;
    padding: 0 15px;
`;

export const MiniLogo = styled.Image`
    /* width: 50px;
    height: 50px; */
`;