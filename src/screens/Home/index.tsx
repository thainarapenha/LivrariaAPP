
import { CardBook } from "@components/CardBook";
import { Container } from "./styles";
import { FlatList, Text } from "react-native"
import { useContext } from "react";
import { BookContext } from "@contexts/ModelContext";

export const Home = () => {
  const { Book } = useContext(BookContext);

  return (
    <Container>
      <Text>Hello word!</Text>

      <FlatList
        data={Book.slice(0,5)}
        keyExtractor={(item: any) => item.id_livro}
        renderItem={({ item }) => (
          <CardBook
            image={item.url_img}
            title={item.titulo}
            description={item.descricao}
            price={item.preco}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={Book.slice(6, 15)}
        keyExtractor={(item: any) => item.id_livro}
        renderItem={({ item }) => (
          <CardBook
            image={item.url_img}
            title={item.titulo}
            description={item.descricao}
            price={item.preco}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}