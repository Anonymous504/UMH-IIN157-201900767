/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App(){

  return (
    <>
    <SafeAreaView style={styles.encabezado}>
      <View>
        <Text style={styles.sectionTitle}>Convertidor de Monedas</Text>
      </View>
    </SafeAreaView>
    <View>
      <TextInput style={styles.input} placeholder="Escriba Valor en Dolares"></TextInput>
      <TextInput style={styles.input} placeholder="Escriba Valor en Lempiras"></TextInput>
    </View>
    </>

  )
}

const styles = StyleSheet.create({
  encabezado:{
    backgroundColor: '#FFA000',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems: 'center'
    },

    input:{
      height: 40,
    margin: 12,
    borderWidth: 1,
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
