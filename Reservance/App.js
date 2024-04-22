import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/layout/Navbar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Home from './Components/Pages/Home';
import Entrar from './Components/Pages/Entrar';
import Footer from "./Components/layout/Footer";
import Inventario from "./Components/Pages/Inventario";


const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>

    <View style={styles.container}>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Reservance' }} />
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="Inventario" component={Inventario} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </View>
      <Footer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
