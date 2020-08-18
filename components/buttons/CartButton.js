import React from "react";
import { observer } from "mobx-react";

//navigation
import { useNavigation } from "@react-navigation/native";

//styles
import { CartButtonStyled, CartTextStyled } from "./styles";
import { Button } from "native-base";

//store
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};

export default observer(CartButton);
