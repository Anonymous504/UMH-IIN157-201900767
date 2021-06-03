/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Alert,
  Separator
} from 'react-native';


function App(){
  const [entrada, setEntrada] = useState(0);
  const [conversion, setConversion] = useState(0);

  const showAlert = () => {
    Alert.alert("Conversion Exitosa","Resultado " + conversion);
  }

  const convertir = ( valor ) => {
    const resultado = valor * 24.6;
    setConversion(resultado);
  }

  const inicializar = () =>{
    setConversion(0);
    setEntrada(0);

  }

  return (
    <>
    <SafeAreaView style={styles.encabezado}>
      <View>
        <Text style={styles.sectionTitle}>Convertidor de Monedas</Text>
      </View>
    </SafeAreaView>
    <View>
    <Text style={styles.sectionDescription}>Valor en Dolares</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba Valor en Dolares"
      keyboardType='numeric'
      onChange={(e) => convertir(e.nativeEvent.text) }
      defaultValue={entrada.toString()}></TextInput>

      <Text style={styles.sectionDescription}>Valor en Lempiras</Text>
      <TextInput
      style={styles.input}
      placeholder="Valor en Lempiras"
      defaultValue={conversion.toString()}></TextInput>
     <Button title="Calcular" color="#1E90FF" onPress={showAlert}>Calcular</Button>
     <Button title="Limpiar" color="#1E90FF" onPress={inicializar}>Limpiar</Button>
     </View>
    </>

  )
}

const styles = StyleSheet.create({
  encabezado:{
    backgroundColor: '#FFA000',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems: 'center'
    },

    input:{
      height: 40,
    margin: 12,
    borderWidth: 1,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
