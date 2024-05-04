import React from "react";
import { Page, PageTitle } from "./styles";
import Header from "../../Components/Header";
import ListItemCadastrado from "../../Components/ListItem";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const item_teste = [
    {
      proprietario: "Julio",
      placa: "KXA5F33",
    },
    {
      proprietario: "Maria",
      placa: "ABC1234",
    },
    {
      proprietario: "João",
      placa: "XYZ9876",
    },
    {
      proprietario: "José",
      placa: "QWE6543",
    },
    {
      proprietario: "Ana",
      placa: "POI0987",
    },
    {
      proprietario: "Carlos",
      placa: "MNB1234",
    }

  ];

  return (
    <Page>
      <Header navigation={navigation} hasButtton={true}/>
      <PageTitle>Veículos Cadastrados</PageTitle>
      <ScrollView>
        {item_teste.map((item, index) => (
          <ListItemCadastrado key={index} item={item} pageType={"home"}/>
        ))}
      </ScrollView>
    </Page>
  );
}
