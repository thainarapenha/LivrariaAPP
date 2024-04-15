import { ThemeProvider } from 'styled-components';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import { BookProvider } from '@contexts/BookContext';
import { DetailsProvider } from '@contexts/DetailsContext';
import Routes from '@routes/index';
import theme from '@theme/index';
import { LoadingTimeSplashProvider } from '@contexts/LoadingTimeSplash';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });


  return (
    <LoadingTimeSplashProvider>
      <BookProvider>
        <DetailsProvider>
          <ThemeProvider theme={theme} >
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            {fontsLoaded ? <Routes /> : <ActivityIndicator />}
          </ThemeProvider>
        </DetailsProvider>
      </BookProvider>
    </LoadingTimeSplashProvider>

  );
}
