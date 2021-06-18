/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Tarea from "./src/componentes/Tarea"

function App(){

  return(
    <SafeAreaView>
      <ScrollView>
      <Tarea
      titulo="Tarea 1"
      descripcion="Descripcion Tarea 1"
      />
      <Tarea
      titulo="Tarea 2"
      descripcion="Descripcion Tarea 2"
      />
      <Tarea
      titulo="Tarea 3"
      descripcion="Descripcion Tarea 3"
      />
      <Tarea
      />
      <Tarea
      />
      <Tarea
      />
      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
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
  titulo: {
    fontSize: 100,
    fontWeight: '600',
  }
});

export default App;
