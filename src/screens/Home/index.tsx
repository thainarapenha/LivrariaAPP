import { useContext } from "react";
import { CardBook } from "@components/CardBook";
import { FlatList } from "react-native"
import { BookContext } from "@contexts/BookContext";
import { Container, ScrollContainer, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  // busco dentro do contexto os dados que foram salvos no state
  const { Book } = useContext(BookContext);

  // declaração necessária para fazermos a navegação entre telas
  const navigation = useNavigation();

  const NavigationPages = () => {
    // navegação simples para troca de tela na aplicação
    // Obs: Para ver os detalhes do livro clicado em uma nova tela, você deve identifica-ló através do id e
    // depois realizar a troca de tela. Fica como sugestão pesquisar sobre o uso do context e
    // passagem de parametros
    navigation.navigate('Details');
  }

  return (
    <Container>

      <ScrollContainer>
        <Title>Auto Ajuda</Title>

        {/* Componente responsável por deixar nosso card "rolável" em tela */}
        <FlatList
          data={Book.slice(0, 5)}
          keyExtractor={(item: any) => item.id_livro}
          renderItem={({ item }) => (
            // renderiza todos os livros dentro do component criado
            // passando as propriedades esperadas na interface
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