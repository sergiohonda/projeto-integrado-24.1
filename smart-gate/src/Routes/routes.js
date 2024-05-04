import React from "react";
import SignedInRoutes from "./signedInRoutes";
import SignedOutRoutes from "./signedOutRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Signed Out" component={SignedOutRoutes} />
        <Stack.Screen name="Signed In" component={SignedInRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
