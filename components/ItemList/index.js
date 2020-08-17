import React from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";
import { Spinner, List, Content } from "native-base";

//store
import itemStore from "../../stores/itemStore";
//componants
import Item from "./Item";

const ItemList = ({ route }) => {
  if (itemStore.loading) return <Spinner />;
  const { bakery } = route.params;

  const itemsList = bakery.items
    .map((item) => itemStore.getItemById(item.id))
    .map((item) => <Item item={item} key={item.id} />);

  return (
    <Content>
      <List>{itemsList}</List>
    </Content>
  );
};

export default observer(ItemList);
