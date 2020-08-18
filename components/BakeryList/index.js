import React from "react";
import { observer } from "mobx-react";
import { List, Content, Spinner } from "native-base";

//components
import BakeryItem from "./BakeryItem";

//stores
import bakeryStore from "../../stores/bakeryStore";

const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />;

  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{bakeryList}</List>
    </Content>
  );
};

export default observer(BakeryList);
