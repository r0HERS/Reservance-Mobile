import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const Footer = () => {
    const navigation = useNavigation();

    const handleEntrarPress = () => {
        navigation.navigate('Entrar'); // Assume que a tela Entrar é definida no seu StackNavigator
    };
    const handleHomePress = () => {
        navigation.navigate('Home'); // Assume que a tela Entrar é definida no seu StackNavigator
    };
    const handleInventarioPress = () => {
        navigation.navigate('Inventario'); // Assume que a tela Entrar é definida no seu StackNavigator
    };

    return (
        <View style={styles.navbar}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.item} onPress={handleHomePress}>
                    <AntDesign name="home" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={handleInventarioPress}>
                    <AntDesign name="inbox" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={handleEntrarPress}>
                    <AntDesign name="user" size={24} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'black',
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
        color: 'white',
    },
});

export default Footer;
