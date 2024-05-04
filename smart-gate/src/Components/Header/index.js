import React from "react";
import { View, Text } from "react-native";
import { HeaderContainer, MiniLogo } from "./styles";
import Button from "../Button";
import { screenHeight } from "../../Constants/constants";

export default function Header({navigation, hasButtton}) {
    return (
        <HeaderContainer>
            <MiniLogo source={require("../../../assets/mini_logo.png")} />
            {hasButtton == true ? 
                <Button
                    width={0.5}
                    text={"+  Cadastrar Veículo"}
                    background={"#255502"}
                    textColor={"#FFFFFF"}
                    borderRadius={5}
                    marginBottom={0}
                    fontSize={15}
                    height={0.06}
                    onPress={() => { navigation.navigate("Cadastrar")}}
                ></Button>
            : <View
                style={{
                    height: screenHeight * 0.06
                }}
                />}

        </HeaderContainer>
    );
}