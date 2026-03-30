import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home/index.js";
import Produtos from "./src/screens/Produtos/produto.js";
import Contato from "./src/screens/Contato/index.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: "Página inicial" }}
        />

        <Stack.Screen
          name="Produtos"
          component={Produtos}
        />

        <Stack.Screen
          name="Contato"
          component={Contato}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}