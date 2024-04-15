import { LoadingTimeSplashContext } from "@contexts/LoadingTimeSplash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens/Details";
import { Home } from "@screens/Home";
import { Login } from "@screens/Login";
import { Search } from "@screens/Search";
import { Splash } from "@screens/Splash";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  const { finishSplash, token } = useContext(LoadingTimeSplashContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!finishSplash ? (
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
      ) : (
        token ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerShown: true,
                title: "Sua busca",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={Login}
            />
          </>
        )
      )}
    </Stack.Navigator>
  );
}