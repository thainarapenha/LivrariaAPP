import { ContainerBook, ContainerInfo, DescriptionBook, ImageBook, PriceBook, TitleBook } from "./styles";

interface ICardBook {
  image: string;
  title: String;
  description: string;
  price: string;
}

export const CardBook:React.FC<ICardBook> = ({
  image,
  title,
  description,
  price
}) => {
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