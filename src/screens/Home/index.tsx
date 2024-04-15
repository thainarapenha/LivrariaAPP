import React, { useContext } from "react";
import { BannerApp, Container, DivShimmerEffect, InputBook, ScrollContainer, SearchButton, SearchContainer, Title } from "./styles";
import { DetailsContext } from "@contexts/DetailsContext";
import { useNavigation } from "@react-navigation/native";
import { BookContext } from "@contexts/BookContext";
import { CardBook } from "@components/CardBook";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { CardBookShimmerEffect } from "@components/CardBookShimmerEffect";
import theme from "@theme/index";

export const Home = () => {
  const navigation = useNavigation();
  const { Book, input, setInput, setItemSearch } = useContext(BookContext);
  const { getDetailsBook } = useContext(DetailsContext);


  const navigateDetailsPage = (id: number) => {
    getDetailsBook(id);
    navigation.navigate("Details");
  }
  
  const handleSearchBook = (book: string) => {
    setItemSearch(book);
    setInput('');
    navigation.navigate("Search");
  }

  return (
    <Container>
      <Header title={"Meu Livro"} />

      <SearchContainer>
        <InputBook
          placeholder="Digite um livro"
          placeholderTextColor={theme.COLORS.BLACK}
          value={input}
          onChangeText={setInput}
        />
        <SearchButton onPress={() => { handleSearchBook(input) }}>
          <Feather
            name="search"
            size={30}
            color={theme.COLORS.BLACK}
          />
        </SearchButton>
      </SearchContainer>

      <ScrollContainer>
        <BannerApp
          source={{ uri: `https://img.freepik.com/premium-vector/group-mix-race-people-reading-books-together-modern-book-club-horizontal-full-length-illustration_48369-36276.jpg` }}
        />

        {Book.length != 0 ? (
          <>
            <Title>Terror & Horror</Title>
            <FlatList
              data={Book.slice(15, 20)}
              keyExtractor={(item: any) => item.id_livro}
              renderItem={({ item }) => (
                <CardBook
                  imageBook={item.url_img}
                  title={item.titulo}
                  description={item.descricao}
                  price={item.preco}
                  id={0}
                  navigateDetails={() => navigateDetailsPage(item.id_livro)}
                />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: 10, marginHorizontal: '5%' }}
            />

            <Title>Coleção Juvenil</Title>
            <FlatList
              data={Book.slice(8, 15)}
              keyExtractor={(item: any) => item.id_livro}
              renderItem={({ item }) => (
                <CardBook
                  imageBook={item.url_img}
                  title={item.titulo}
                  description={item.descricao}
                  price={item.preco}
                  id={0}
                  navigateDetails={() => navigateDetailsPage(item.id_livro)}
                />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: 10, marginHorizontal: '5%' }}
            />

            <Title>Autoajuda</Title>
            <FlatList
              data={Book.slice(0, 5)}
              keyExtractor={(item: any) => item.id_livro}
              renderItem={({ item }) => (
                <CardBook
                  imageBook={item.url_img}
                  title={item.titulo}
                  description={item.descricao}
                  price={item.preco}
                  id={0}
                  navigateDetails={() => navigateDetailsPage(item.id_livro)}
                />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: 10, marginHorizontal: '5%' }}
            />
          </>
        ) : (
          <DivShimmerEffect>
            <CardBookShimmerEffect />
            <CardBookShimmerEffect />
            <CardBookShimmerEffect />
          </DivShimmerEffect>
        )}

        <Footer />
      </ScrollContainer>
    </Container >
  );
}