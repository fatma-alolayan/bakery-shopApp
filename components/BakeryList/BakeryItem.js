import React from "react";
import { Text } from "react-native";
import { ListItem, Thumbnail } from "native-base";
import { BakeryItemStyled } from "./styles";

const BakeryItem = ({ bakery, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Items", { bakery: bakery })}>
      <Thumbnail
        source={{
          uri:
            bakery.image ||
            "https://i1.wp.com/dinnersdishesanddesserts.com/wp-content/uploads/2019/01/croissant-baking-square.png?fit=519%2C516&ssl=1",
        }}
      />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};

export default BakeryItem;
