import { ButtonBook, ContainerBook, ContainerInfo, DescriptionBook, ImageBook, PriceBook, TitleBook } from "./styles";
import { Text } from "react-native"

interface ICardBook {
  image: string;
  title: String;
  description: string;
  price: string;
  navigateDetais(): void;
}

export const CardBook:React.FC<ICardBook> = ({ image,title, description, price, navigateDetais }) => {
  return (
    <ContainerBook onPress={() => {navigateDetais()}}>
      <ImageBook
        source={{ uri: `${image}` }}
      />

      <ContainerInfo>
        <TitleBook numberOfLines={1}>
          {title}
        </TitleBook>

        <DescriptionBook numberOfLines={3}>
          {description}
        </DescriptionBook>

        <PriceBook>
          R$ {price}
        </PriceBook>

        <ButtonBook>
          <Text>Comprar</Text>
        </ButtonBook>
      </ContainerInfo>
    </ContainerBook>
  );
}