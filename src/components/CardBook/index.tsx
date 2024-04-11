import { ButtonBook, ContainerBook, ContainerInfo, DescriptionBook, ImageBook, PriceBook, TitleBook } from "./styles";
import { Text } from "react-native"

// definimos que esse componente possui essas caracteristicas
// definidas nessa interface, ou seja, é um molde.
interface ICardBook {
  image: string;
  title: String;
  description: string;
  price: string;
  navigateDetais(): void; //função adicionada a interface
}

// passamos essas caracteristicas para nosso componente
// e tornamos nossos campos genericos para receber as
// informações dos livros
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