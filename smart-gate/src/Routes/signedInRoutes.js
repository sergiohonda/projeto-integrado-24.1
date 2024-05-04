import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigatorRoutes from "./tabNavigator";
import Home from "../Pages/Home";
import Historico from "../Pages/Historico";
import Cadastrar from "../Pages/Cadastrar";

const Stack = createStackNavigator();

export default function SignedInRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigatorRoutes" component={TabNavigatorRoutes} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Historico" component={Historico} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
    </Stack.Navigator>
  );
}
