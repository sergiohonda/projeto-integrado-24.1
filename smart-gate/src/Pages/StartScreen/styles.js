import styled from "styled-components";
import { screenHeight } from '../../Constants/constants';

export const Container = styled.View`
    flex: 1;
    background-color: #212121;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    height: ${screenHeight * 0.1}px;
`;