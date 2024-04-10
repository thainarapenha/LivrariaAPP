import { ContainerBook, ContainerInfo, DescriptionBook, ImageBook, PriceBook, TitleBook } from "./styles";

// definimos que esse componente possui essas caracteristicas
// definidas nessa interface, ou seja, é um molde.
interface ICardBook {
  image: string;
  title: String;
  description: string;
  price: string;
}

// passamos essas caracteristicas para nosso componente
// e tornamos nossos campos genericos para receber as
// informações dos livros
export const CardBook:React.FC<ICardBook> = ({ image, title, description, price }) => {
  return (
    <ContainerBook>
      <ImageBook
        source={{ uri: `${image}` }}
      />

      <ContainerInfo>
        <TitleBook>
          {title}
        </TitleBook>

        <DescriptionBook>
          {description}
        </DescriptionBook>

        <PriceBook>
          R$ {price}
        </PriceBook>
      </ContainerInfo>
    </ContainerBook>
  );
}