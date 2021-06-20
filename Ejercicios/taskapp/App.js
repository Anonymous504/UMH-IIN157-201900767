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
  Button
} from 'react-native';

import Tarea from "./src/componentes/Tarea"

function App(){

  const [listaTareas, setTareas] = useState( [
                                    {id:1, titulo : "Tarea 1", descripcion : "Lorem ipsum text 1"}

                                  ]);

  const [nuevaTarea, addTarea] = useState(false);

  useEffect( () => {
    if(nuevaTarea === true){
      listaTareas.push({id:4, titulo : "Tarea x+1", descripcion : "Esta es una tarea agregada"});
    }
    addTarea(false);
  },[nuevaTarea])

  const agregarTarea = () => {
    addTarea(true);
  }

  return(
    <SafeAreaView>
      <Button styles={styles.btn} title="Nueva Tarea" color="#3F51B5" onPress={agregarTarea}></Button>
      <ScrollView>
        {
          listaTareas.map( (item,index) => (
                <Tarea data={item}/>
          ))
        }

      </ScrollView>
    </SafeAreaView>

  );
}

/*<Tarea
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
/>*/


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
  },
  btn:{
    marginTop:8,
    marginLeft:8,
    marginRight:8
  }

});

export default App;
