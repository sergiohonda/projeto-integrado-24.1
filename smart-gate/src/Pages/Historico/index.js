import React from "react";
import { Page, PageTitle } from "../Home/styles";
import Header from "../../Components/Header";
import ListItemCadastrado from "../../Components/ListItem";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const item_teste = [
    {
      data: "14/04/24 - 14:30",
      placa: "KXA5F33",
      status: "Autorizado",
      confianca: 0.95
    },
    {
      data: "14/04/24 - 14:30",
      placa: "ABC1234",
      status: "Autorizado",
      confianca: 0.89
    },
    {
      data: "14/04/24 - 14:30",
      placa: "XYZ9876",
      status: "Rejeitado",
      confianca: 0.95
    },
    {
      data: "14/04/24 - 14:30",
      placa: "QWE6543",
      status: "Rejeitado",
      confianca: 0.99
    },
    {
      data: "14/04/24 - 14:30",
      placa: "POI0987",
      status: "Autorizado",
      confianca: 0.77
    },
    {
      data: "14/04/24 - 14:30",
      placa: "MNB1234",
      status: "Rejeitado",
      confianca: 0.85
    }
  ];

  return (
    <Page>
      <Header hasButtton={false}/>
      <PageTitle>Veículos Detectados</PageTitle>
      <ScrollView>
        {item_teste.map((item, index) => (
          <ListItemCadastrado key={index} item={item} pageType={"historico"}/>
        ))}
      </ScrollView>
    </Page>
  );
}
