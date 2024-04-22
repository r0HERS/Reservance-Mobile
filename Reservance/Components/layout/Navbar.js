import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const handleEntrarPress = () => {
    navigation.navigate('Entrar'); // Assume que a tela Entrar é definida no seu StackNavigator
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.logo}>Reservance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.item}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleEntrarPress}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#282c34',
    paddingTop: 20, // ajuste conforme necessário
    paddingBottom: 10, // ajuste conforme necessário
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10, // ajuste conforme necessário
  },
  item: {
    paddingHorizontal: 10, // ajuste conforme necessário
  },
});

export default Navbar;
