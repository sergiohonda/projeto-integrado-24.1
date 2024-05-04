import styled from "styled-components";
import { colors, screenWidth } from "../../Constants/constants";

export const ListItem = styled.View`
    margin: 0 ${screenWidth * 0.06}px;
    padding: ${screenWidth * 0.05}px ${screenWidth * 0.02}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: ${colors.green};
    border-bottom-width: 2px;
    border-style: solid;
`;

export const ListItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ListItemInfo = styled.View`
    flex: 1;
    margin-left: 20px;
`;

export const ListItemText = styled.Text`
    color: ${colors.white};
    font-size: 14px;
`;

export const ListItemBold = styled.Text`
    color: ${props => props.type ? props.type == "Rejeitado" ? colors.red_rejeitado : colors.green_autorizado : colors.white};
    font-size: 14px;
    font-weight: bold;
`;