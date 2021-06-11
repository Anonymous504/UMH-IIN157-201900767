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
  Separator,
  Image,
} from 'react-native';


function App(){
  const [entrada, setEntrada] = useState(0);
  const [tasa, setTasa] = useState(0);
  const [conversion, setConversion] = useState(0);


  const convertir = () => {
    const resultado = entrada * tasa;
    setConversion(resultado);
  }

  const inicializar = () =>{
    setEntrada(0);
    setTasa(0);
    setConversion(0);

  }

  return (
    <>
    <SafeAreaView style={styles.encabezado}>
      <View>
        <Text style={styles.sectionTitle}>Convertidor de Divisas</Text>
        <Text style={styles.sectionTitle}>Joseph Fabricio Andino</Text>
      </View>
    </SafeAreaView>
    <View style={styles.container}>
    <Image
          style={styles.logo}
          source={require("./convertir.png")}
        />
        </View>
        <View>
    <Text style={styles.sectionDescription}>Valor a Convertir</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba Valor a Convertir"
      defaultValue={entrada.toString()}
      keyboardType='numeric'
      value={entrada}
      onChangeText={(newValue)=> setEntrada(newValue)}
      ></TextInput>

      <Text style={styles.sectionDescription}>Tasa de Cambio</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba la Tasa de Cambio"
      defaultValue={tasa.toString()}
      keyboardType='numeric'
      value={tasa}
      onChangeText={(newValue)=> setTasa(newValue)}></TextInput>
     <Button title="Calcular" color="#1E90FF" onPress={convertir}>Calcular</Button>
     <Text style={styles.sectionTitle} alignItems='center'> Conversion: {conversion}</Text>
     <Button title="Limpiar" color="#1E90FF" onPress={inicializar}>Limpiar</Button>
     </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
},
  encabezado:{
    backgroundColor: '#40CAFF',
    height: 130,
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
    alignItems: 'center',
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
