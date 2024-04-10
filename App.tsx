import { ThemeProvider } from 'styled-components';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import Routes from '@routes/index';
import theme from '@theme/index';
import { BookProvider } from '@contexts/ModelContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });


  return (
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
