import React from "react";
import { observer } from "mobx-react";

//style
import { ListItem, Body, Text, Right, Thumbnail } from "native-base";
import { TotalPrice, TrashIcon } from "./styles";

//store
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Thumbnail source={{ uri: item.image }} />
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.deleteItem(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
