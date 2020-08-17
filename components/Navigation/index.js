import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BakeryList from "../BakeryList";
import ItemList from "../ItemList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Bakeries"
        component={BakeryList}
        options={{ title: "Choose a Bakery" }}
      />
      <Screen
        name="Items"
        component={ItemList}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
