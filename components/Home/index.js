import React from "react";
import { StyleSheet, Text, View } from "react-native";
import logo from "../../chocolate.jpg";

// Styling
import { HomeBackground, TopStyling, Title, ButtonStyled } from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground source={logo}>
      <TopStyling>
        <Title>Bakery</Title>
        <Text>Bake it till you make it</Text>
      </TopStyling>

      <ButtonStyled onPress={() => navigation.navigate("Bakeries")}>
        Click here to skip
      </ButtonStyled>
    </HomeBackground>
  );
};

export default Home;
