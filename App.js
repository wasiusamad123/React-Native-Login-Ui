import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import Dashboard from './screens/Dashboard';
import RecipeDetailScreen from './screens/RecipeDetailScreen'; // Corrected import path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{ headerShown: false }} name="RecipeDetail" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
