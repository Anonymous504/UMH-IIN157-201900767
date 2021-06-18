/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
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
} from 'react-native';

export default function Tarea(props){
    const {titulo = "Titulo de tarea", descripcion = "Sin descripcion"} = props;

    return(
        <View style={estilos.contenedor}>
            <Text style= {estilos.titulo}>{titulo}</Text>
            <Text style= {estilos.descripcion}>{descripcion}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width:'95%',
        height:150,
        padding:10,
        marginLeft:8,
        marginRight:8,
        margin:8,
        marginBottom:8,
        marginTop:8,
        borderRadius:10,
        backgroundColor:'#85C1E9'
    },
    titulo:{
        fontSize:22,
        fontWeight:'500'
    }
})