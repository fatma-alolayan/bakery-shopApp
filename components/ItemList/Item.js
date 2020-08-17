import React from "react";
import { Text } from "react-native";
import { ListItem, List } from "native-base";
import { ItemStyled } from "./styles";

const Item = ({ item }) => {
  return (
    <ListItem>
      <ItemStyled>{item.name}</ItemStyled>
    </ListItem>
  );
};

export default Item;
