import { ThemeProvider } from 'styled-components';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import { BookProvider } from '@contexts/BookContext';
import Routes from '@routes/index';
import theme from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    // envolvo a aplicação com o contexto criado para gerenciar
    // as informações dos livros
    <BookProvider>
      <ThemeProvider theme={theme} >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
    </BookProvider>
  );
}
