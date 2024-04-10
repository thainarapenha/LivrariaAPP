
import { useContext } from "react";
import { CardBook } from "@components/CardBook";
import { FlatList, Text } from "react-native"
import { BookContext } from "@contexts/BookContext";
import { Container } from "./styles";

export const Home = () => {
  // busco dentro do contexto os dados que foram salvos no state
  const { Book } = useContext(BookContext);

  return (
    <Container>
      <Text>Hello word!</Text>

      {/* Componente responsável por deixar nosso card "rolável" em tela */}
      <FlatList
        data={Book.slice(0,5)}
        keyExtractor={(item: any) => item.id_livro}
        renderItem={({ item }) => (
          // renderiza todos os livros dentro do component criado
          // passando as propriedades esperadas na interface
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