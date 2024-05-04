import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome  } from "@expo/vector-icons";

import { colors, screenHeight, screenWidth } from "../Constants/constants";
import Home from "../Pages/Home";
import Historico from "../Pages/Historico";

const Tab = createBottomTabNavigator();

export default function TabNavigatorRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        style: {
          position: "absolute",
          height: screenHeight * 0.3,
          minHeight: 80,
        },
        showLabel: false,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.background,
        tabBarStyle: {
          height: screenHeight * 0.1,
          backgroundColor: colors.background,
        },
        tabBarItemStyle: {
          margin: screenHeight * 0.01,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo 
              name="home"
              size={50}
              color={focused ? colors.green : colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Historico}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome 
              name="car"
              size={50}
              color={focused ? colors.green : colors.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
