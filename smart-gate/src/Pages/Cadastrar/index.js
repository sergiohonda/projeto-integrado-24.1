import React from "react";
import { Page, PageTitle } from "../Home/styles";
import Header from "../../Components/Header";
import { TextInput } from 'react-native-paper';
import { CadastroContainer } from "./styles";
import Button from "../../Components/Button";
import { colors } from "../../Constants/constants";

export default function Cadastrar({ navigation }) {
    const [proprietario, setProprietario] = React.useState('');
    const [placa, setPlaca] = React.useState('');

    return (
        <Page>
            <Header hasButtton={false}/>
            <PageTitle>Cadastrar Veículo</PageTitle>
            <CadastroContainer>
                <TextInput
                    label="Proprietário"
                    value={proprietario}
                    onChangeText={text => setProprietario(text)}
                    style={{width: "85%"}}
                />
                <TextInput
                    label="Placa"
                    value={placa}
                    onChangeText={text => setPlaca(text)}
                    style={{width: "85%"}}
                />
                <Button
                    width={0.8}
                    text={"Cadastrar"}
                    background={colors.green}
                    textColor={colors.white}
                    borderRadius={15}
                    marginBottom={0.03}
                    fontSize={25}
                    height={0.07}
                    onPress={() => { console.log("Cadastrado"); }}
                ></Button>
            </CadastroContainer>
            <Button
                width={0.5}
                text={"Cancelar"}
                background={colors.background}
                textColor={colors.white}
                borderRadius={15}
                marginBottom={0.05}
                fontSize={20}
                height={0.07}
                onPress={() => { navigation.navigate("TabNavigatorRoutes"); }}
            ></Button>
        </Page>
    );
}