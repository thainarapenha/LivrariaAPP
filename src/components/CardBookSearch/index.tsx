import React from "react";
import {Text} from "react-native"
import { ICardBook } from "@interfaces/cardBook";
import { ContainerBook, ImageBook, TitleBook, DescriptionBook, PriceBook, ContainerInfo, ButtonCart } from "./styles";

export const CardBookSearch: React.FC<ICardBook> = ({ imageBook, title, description, price, id, navigateDetails }) => {
  return (
    <ContainerBook onPress={() => navigateDetails(id)}>
      <ImageBook
        source={{ uri: `${imageBook}` }}
      />

      <ContainerInfo>
        <TitleBook numberOfLines={2}>
          {title}
        </TitleBook>

        <DescriptionBook numberOfLines={3}>
          {description}
        </DescriptionBook>
        
        <PriceBook>R$ {price}</PriceBook>

        <ButtonCart>
          <Text>Comprar</Text>
        </ButtonCart>
      </ContainerInfo>
    </ContainerBook>
  );
}