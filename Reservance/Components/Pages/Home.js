import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Defina a função do componente Entrar
const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pesquise sua proxima refeição!</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}

                />


            </View>
        </View>
    );
};

// Estilização do componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

// Exporte o componente Entrar
export default Home;