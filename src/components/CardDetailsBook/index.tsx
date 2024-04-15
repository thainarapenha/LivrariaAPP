import React from "react";
import { ContainerBook, ImageBook, TitleBook, DescriptionBook, PriceBook, ContainerInfo, ButtonCart, ScrollDescription, ContainerText } from "./styles";
import { Text } from "react-native"

type IDetailsBook = {
  titulo: string;
  descricao: string;
  url_img: string;
  preco: string;
}

export const CardDetailsBook: React.FC<IDetailsBook> = ({ titulo, descricao, url_img, preco }) => {
  return (
    <ContainerBook>
      <ImageBook
        source={{ uri: `${url_img}` }}
      />

      <ContainerText>

        <ContainerInfo>
          <TitleBook numberOfLines={2}>
            {titulo}
          </TitleBook>

          <ScrollDescription>
            <DescriptionBook >
              {descricao}
            </DescriptionBook>
          </ScrollDescription>

          <PriceBook>R$ {preco}</PriceBook>

          <ButtonCart>
            <Text>Comprar</Text>
          </ButtonCart>
        </ContainerInfo>
      </ContainerText>

    </ContainerBook>
  );
}