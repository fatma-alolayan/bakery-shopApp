import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

import {
  ListItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Body,
  Text,
} from "native-base";
import { ItemStyled } from "./styles";

//stores
import cartStore from "../../stores/cartStore";

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity: quantity, itemId: item.id };
    cartStore.addItem(newItem);
  };
  return (
    <ListItem>
      <Thumbnail
        source={{
          uri:
            item.image ||
            "https://i1.wp.com/dinnersdishesanddesserts.com/wp-content/uploads/2019/01/croissant-baking-square.png?fit=519%2C516&ssl=1",
        }}
      />

      <Left>
        <Body>
          <ItemStyled>{item.name}</ItemStyled>
          <Text>{item.price} KD</Text>
        </Body>
      </Left>

      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={1}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Item;
