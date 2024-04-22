import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Defina a função do componente Entrar
const Entrar = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [erro, setErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    // Lógica de validação e envio do formulário
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErro(true);
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      setErro(true);
      setErrorMessage('As senhas não coincidem');
      return;
    }

    // Aqui você pode colocar a lógica para lidar com o envio do formulário
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservance</Text>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, { borderColor: erro && username.trim() === '' ? 'red' : 'initial' }]}
          placeholder="Nome de usuário ou email"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, { borderColor: erro && password.trim() === '' ? 'red' : 'initial' }]}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {erro && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <Text>Não possui uma conta? <Text style={styles.link}>Cadastrar-se</Text></Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
export default Entrar;
