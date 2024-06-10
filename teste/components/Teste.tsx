import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';



export default function Exercicio() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [soma, setSoma] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const somaPosi = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const resultado = n1 + n2;
    setSoma(resultado);

    if (resultado > 0) {
      setMensagem('O número é Positivo');
    } else if (resultado < 0) {
      setMensagem('O número é negativo');
    } else {
      setMensagem('O número é ZERO');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercicio 1</Text>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
        placeholder="Digite o 1° Número"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
        placeholder="Digite o 2° Número"
        keyboardType="numeric"
      />

      <Button title="Somar" onPress={somaPosi} />

      <Text style={styles.titulo}>Soma: {soma}</Text>

      <Text style={styles.titulo}>Mensagem: {mensagem}</Text>

      {/* <Image source={Cavalo} style={styles.image} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },

  input:{
    color: 'white',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20,
    padding: 10
  },
});
