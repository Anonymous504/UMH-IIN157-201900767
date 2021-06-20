/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Image,
  Alert
} from 'react-native';
import Contacto from './src/componentes/Contacto';

import Tarea from "./src/componentes/Contacto"

function App(){


  const [nombre, setNombre] = useState(0);
  const [telefono, setTelefono] = useState(0);
  const [correo, setCorreo] = useState(0);

  const [listaContactos, setContacto] = useState( [
                                    {id:0, nom : "", tel : "", email : ""}

                                  ]);

  const [nuevoContacto, addContacto] = useState(false);

  useEffect( () => {
    if(nuevoContacto === true){
      listaContactos.push({id:1, nom : nombre, tel : telefono, email : correo});
    }
    addContacto(false);
  },[nuevoContacto])

  const agregarContacto = () => {
    addContacto(true);
    Alert.alert(
      "Nuevo Contacto",
      "Se Agregó el Contacto de Manera Exitosa",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  const limpiar = () =>{
    setNombre(0);
    setTelefono(0);
    setCorreo(0);

  }

  return(
    <>
    <SafeAreaView style={styles.fondo}>
      <Image
          style={styles.logo}
          source={require("./AddContact.png")}
        />
    <Text style={styles.sectionDescriptionTop}>Nombre:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba Nombre del Contacto"
      value={nombre}
      onChangeText={(newValue)=> setNombre(newValue)}
      ></TextInput>

      <Text style={styles.sectionDescriptionTop}>Telefono:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba el Telefono del Contacto"
      keyboardType='numeric'
      value={telefono}
      onChangeText={(newValue)=> setTelefono(newValue)}></TextInput>

      <Text style={styles.sectionDescriptionTop}>Correo:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba el Correo del Contacto"
      value={correo}
      onChangeText={(newValue)=> setCorreo(newValue)}
      ></TextInput>
      <Button styles={styles.boton} title="Agregar Contacto" color="#C37B00"onPress={agregarContacto}></Button>
      <Button styles={styles.boton} title="Limpiar" color="#3F51B5" onPress={limpiar}></Button>
      </SafeAreaView>
      <ScrollView style={styles.fondoScroll}>
        {
          listaContactos.map( (item,index) => (
                <Contacto data={item}/>
          ))
        }

      </ScrollView>
      </>

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
  sectionDescriptionTop: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "white"
  },
  highlight: {
    fontWeight: '700',
  },
  titulo: {
    fontSize: 100,
    fontWeight: '600',
  },
  boton:{
    marginTop:8,
    marginLeft:8,
    marginRight:8,
    borderRadius:8

  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    left:150
},
fondo: {
  backgroundColor: "#4D4D4C"
},
fondoScroll: {
  backgroundColor: "#4D4D4C"
},
input:{
  height: 40,
margin: 12,
borderWidth: 1,
backgroundColor:"white"
},

});

export default App;
