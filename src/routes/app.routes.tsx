import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens/Details";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Details"
        component={Details}
      />
    </Navigator>
  );
}

export default AppRoutes;