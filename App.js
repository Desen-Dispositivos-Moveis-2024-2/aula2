import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextoSimples from './Components/TextoSimples';
import EntradaDeTexto2 from './Components/EntradaDeTexto2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>Aula de desenvolvimento web</Text>
      <TextoSimples nome={'Karan'}/>
      <EntradaDeTexto2 / >
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoGrande: {
    fontSize: 40
  }

});
