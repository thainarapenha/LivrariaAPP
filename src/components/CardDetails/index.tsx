import { ContainerBook, ContainerInfo, Description, ImageDetails, Price, TitleBook } from "./styles";

interface ICardBook {
  image: string;
  title: String;
  description: string;
  price: string;
}

export const CardDetails: React.FC<ICardBook> = ({ image, title, description, price }) => {
  return (
    <ContainerBook>
      <ImageDetails
        source={{ uri: `${image}` }}
      />

      <ContainerInfo>
        <TitleBook>
          {title}
        </TitleBook>

        <Description>
          {description}
        </Description>

        <Price>
          {price}
        </Price>
      </ContainerInfo>
    </ContainerBook>
  );
}