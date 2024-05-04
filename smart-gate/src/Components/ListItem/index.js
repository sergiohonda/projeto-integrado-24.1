import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../Constants/constants";
import { ListItem, ListItemContainer, ListItemInfo, ListItemText, ListItemBold } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ListItemCadastrado({ item, pageType }) {
    if (pageType == "historico") {
        return (
            <ListItem>
                <ListItemContainer>
                    <FontAwesome
                        name="car"
                        size={35}
                        color={colors.white}
                    />
                    <ListItemInfo>
                        <ListItemBold>
                            {item.data}
                        </ListItemBold>
                        <ListItemText>
                            Placa: <ListItemBold>{item.placa}</ListItemBold>
                        </ListItemText>
                    </ListItemInfo>
                    <ListItemInfo>
                        <ListItemText>
                            Status: <ListItemBold type={item.status}>{item.status}</ListItemBold>
                        </ListItemText>
                        <ListItemText>
                            Confiança: <ListItemBold>{item.confianca * 100}%</ListItemBold>
                        </ListItemText>
                    </ListItemInfo>
                </ListItemContainer>
            </ListItem>
        );
    }

    return (
        <ListItem>
            <ListItemContainer>
                <FontAwesome
                    name="car"
                    size={35}
                    color={colors.white}
                />
                <ListItemInfo>
                    <ListItemText>
                        Proprietário: <ListItemBold>{item.proprietario}</ListItemBold>
                    </ListItemText>
                    <ListItemText>
                        Placa: <ListItemBold>{item.placa}</ListItemBold>
                    </ListItemText>
                </ListItemInfo>
                <TouchableOpacity onPress={() => { console.log("Deletado"); }}>
                    <FontAwesome
                        name="trash"
                        size={35}
                        color={colors.white}
                        marginRight={10}
                    />
                </TouchableOpacity>
            </ListItemContainer>
        </ListItem>
    );
}