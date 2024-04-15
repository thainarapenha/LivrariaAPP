import { ContainerDetails, Header, HeaderButton } from "./styles";
import { DetailsContext } from "@contexts/DetailsContext";
import { CardDetailsBook } from "@components/CardDetailsBook";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import theme from "@theme/index";

export const Details = () => {
  const navigation = useNavigation();
  const { DetailsBook,setDetailsBook } = useContext(DetailsContext);

  const goBack = () => {
    setDetailsBook([]);
    navigation.goBack();
  }

  return (
    <ContainerDetails>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => goBack()}>
          <Feather
            name="arrow-left"
            size={28}
            color={theme.COLORS.WHITE}
          />
        </HeaderButton>
      </Header>

      {DetailsBook.map((item, index) => (
        <CardDetailsBook
          key={item.id_livro}
          titulo={item.titulo}
          descricao={item.descricao}
          url_img={item.url_img}
          preco={item.preco}
        />
      ))}
    </ContainerDetails>
  );
}