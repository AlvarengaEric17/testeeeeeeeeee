import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

import Home from '../../components/Teste';

import Exercicio from '../../components/Teste2';

import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  const paginacao = () => {
    if (page === 'home') {
      return <Home />;
    } else if (page === 'exercicio') {
      return <Exercicio />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <h1>TELA 1 CARALHO</h1>

      {paginacao()}

      <Button
        title="Ir para a página de exercicio"
        onPress={() => setPage('exercicio')}
      />

      <Button
        title="Ir para a página Home"
        onPress={() => setPage('home')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
