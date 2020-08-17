import React from "react";
import { Text } from "react-native";
import { ListItem } from "native-base";
import { BakeryItemStyled } from "./styles";

const BakeryItem = ({ bakery, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Items", { bakery: bakery })}>
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};

export default BakeryItem;
