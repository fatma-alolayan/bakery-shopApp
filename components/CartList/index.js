import React from "react";
import { observer } from "mobx-react";
import { List, Spinner } from "native-base";

//components
import CartItem from "./CartItem";

//store
import itemStore from "../../stores/itemStore";
import cartStore from "../../stores/cartStore";

const CartList = () => {
  if (itemStore.loading) return <Spinner />;

  const cartList = cartStore._items
    .map((item) => ({
      ...itemStore.getItemById(item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
