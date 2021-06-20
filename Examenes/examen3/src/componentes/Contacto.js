/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
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
  Image
} from 'react-native';

export default function Contacto(props){
    const {data} = props;
    const {id = 0, nom = nombre, tel = telefono, email = correo} = data;

    return(
        <View style={estilos.contenedor}>
            <Text style= {estilos.titulo}>{"Nombre:"}</Text>
            <Text style= {estilos.descripcion}>{nom}</Text>
            <Text style= {estilos.titulo}>{"Telefono:"}</Text>
            <Text style= {estilos.descripcion}>{tel}</Text>
            <Text style= {estilos.titulo}>{"Correo:"}</Text>
            <Text style= {estilos.descripcion}>{email}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width:'95%',
        height:195,
        padding:10,
        marginLeft:8,
        marginRight:8,
        margin:8,
        marginBottom:8,
        marginTop:8,
        borderRadius:10,
        backgroundColor:'#B8B6B5'
    },
    titulo:{
        fontSize:18,
        fontWeight:'500'
    },
    descripcion: {
        fontSize: 15,
        fontWeight: '600',
      },
       logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        left:150
    }
})