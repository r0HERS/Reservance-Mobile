import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InventarioBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nome}>
                <Text>Nome Restaurante</Text>
            </View>
            <View style={styles.content}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '48%', // Ajuste para 50% da largura do contêiner pai
        margin: '1%',
        maxHeight: 100,
        borderRadius: 7,
        borderColor: 'black', // Alterado de 'borderBlockColor' para 'borderColor'
        borderWidth: 1,
    },
    nome: {
        borderBottomWidth: 1,
    },
    content: {
        height: 45,
    },
});

export default InventarioBox;
