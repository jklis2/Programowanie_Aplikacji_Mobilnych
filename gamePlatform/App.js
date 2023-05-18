import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./routes/HomeScreen";
import LevelsScreen from "./routes/LevelsScreen";
import SettingsScreen from "./routes/SettingsScreen";
import AboutUsScreen from "./routes/AboutUsScreen";
import GameScreen from "./routes/GameScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Levels" component={LevelsScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}