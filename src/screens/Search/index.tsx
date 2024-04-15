import { useContext } from "react";
import { BookContext } from "@contexts/BookContext";
import { useNavigation } from "@react-navigation/native";
import { DetailsContext } from "@contexts/DetailsContext";
import { FlatList } from "react-native";
import { CardBookSearch } from "@components/CardBookSearch";
import { ContainerSearch } from "./styles";
import { Text } from "react-native";

export const Search = () => {
  const navigation = useNavigation();
  const { Book, itemSearch } = useContext(BookContext);
  const { getDetailsBook } = useContext(DetailsContext);

  const SearchBook = Book.filter((listBook) => (
    listBook.titulo.toLowerCase().includes(itemSearch.toLowerCase())
  ));

  const navigateDetailsPage = (id: number) => {
    getDetailsBook(id);
    navigation.navigate("Details");
  }
  
  return (
    <ContainerSearch>
      {SearchBook.length != 0 ? (
        <FlatList
          data={SearchBook}
          keyExtractor={(item: any) => item.id_livro}
          renderItem={({ item }) => (
            <CardBookSearch
              imageBook={item.url_img}
              title={item.titulo}
              description={item.descricao}
              price={item.preco}
              id={0}
              navigateDetails={() => navigateDetailsPage(item.id_livro)}
            />
          )}
          horizontal={false}
          style={{ marginVertical: 10, marginHorizontal: '3%' }}
        />
      ) : (
        <Text>Infelizmente não encontramos esse livro :/</Text>
      )}
    </ContainerSearch>
  );
}