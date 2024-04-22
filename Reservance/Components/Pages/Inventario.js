import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import InventarioBox from "../layout/InventarioBox";

const Inventario = () => {
    return (
        <View style={styles.container}>
            <InventarioBox style={styles.box}/>
            <InventarioBox style={styles.box}/>
            <InventarioBox style={styles.box}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingTop: 40,
        paddingHorizontal: 20, // Adicionando espaço entre os cantos da tela
    },
    box: {
        width: '48%', // 2 componentes por linha com espaço entre eles
        margin: '1%', // Adicionando espaço entre os componentes
    },
});

export default Inventario;
