import React from "react";
import { View } from "react-native";
import { Container, Logo } from "./styles";
import Button from "../../Components/Button";
import { colors } from "../../Constants/constants";

export default function StartScreen( { navigation }) {
return (
    <Container>
        <View />
        <Logo source={require("../../../assets/logo_smartgate.png")} />
        <Button
            width={0.8}
            text={"Acessar"}
            background={colors.green}
            textColor={colors.white}
            borderRadius={15}
            marginBottom={0.05}
            fontSize={25}
            height={0.09}
            onPress={() => { navigation.navigate("Signed In"); }}
        ></Button>
    </Container>
);
}
