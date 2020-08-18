import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BakeryList from "../BakeryList";
import ItemList from "../ItemList";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";

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
        options={{
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="Items"
        component={ItemList}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
