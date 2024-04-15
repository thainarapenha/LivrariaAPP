import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackRoutes } from "./stackRoutes";
import theme from "@theme/index";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return(
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: theme.COLORS.WHITE,
        marginTop: 20,
      },
      drawerActiveBackgroundColor: theme.COLORS.YELLOW,
      drawerActiveTintColor: theme.COLORS.BLACK,
      drawerInactiveTintColor: theme.COLORS.BLACK
    }}
    >
      <Drawer.Screen
      name="HomeDrawer"
      component={StackRoutes}
      options={{
        title: 'Início',
        drawerIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name={focused ? 'home-lock-open' : 'home-lock'}
            size={size}
            color={color}
          />
        )
      }}
      />
    </Drawer.Navigator>
  );
}