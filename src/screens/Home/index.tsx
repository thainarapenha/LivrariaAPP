import { useContext } from "react";
import { CardBook } from "@components/CardBook";
import { FlatList } from "react-native"
import { BookContext } from "@contexts/BookContext";
import { Container, ScrollContainer, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const { Book } = useContext(BookContext);

  const navigation = useNavigation();

  const NavigationPages = () => {
    navigation.navigate('Details');
  }

  return (
    <Container>

      <ScrollContainer>
        <Title>Auto Ajuda</Title>

        <FlatList
          data={Book.slice(0, 5)}
          keyExtractor={(item: any) => item.id_livro}
          renderItem={({ item }) => (
            <CardBook
              image={item.url_img}
              title={item.titulo}
              description={item.descricao}
              price={item.preco}
              navigateDetais={() => {NavigationPages()}}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: '5%'}}
        />

        <Title>Fantasia</Title>
        <FlatList
          data={Book.slice(8, 15)}
          keyExtractor={(item: any) => item.id_livro}
          renderItem={({ item }) => (
            <CardBook
              image={item.url_img}
              title={item.titulo}
              description={item.descricao}
              price={item.preco}
              navigateDetais={() => {NavigationPages()}}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: '5%'}}
        />

        <Title>Terror</Title>
        <FlatList
          data={Book.slice(15, 20)}
          keyExtractor={(item: any) => item.id_livro}
          renderItem={({ item }) => (
            <CardBook
              image={item.url_img}
              title={item.titulo}
              description={item.descricao}
              price={item.preco}
              navigateDetais={() => {NavigationPages()}}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: '5%'}}
        />

      </ScrollContainer>
    </Container>
  );
}