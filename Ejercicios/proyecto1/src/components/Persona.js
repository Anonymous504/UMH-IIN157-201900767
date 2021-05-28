//seccion de importancion de componentes
import React from "react";

export default function Persona(props){
    
    //Asignacion por destructuring
    const {personaInfo, fnsaludar} = props;
    const {nombre = "No disponible", apellido = "No disponible"} = personaInfo;  //props por defecto
    
    console.log(nombre); 

    return(
        <div>
            <h2>Datos Personales</h2>
            <table>
                <tbody>
                    <tr> <td>Nombre:    </td>   <td> {nombre} </td>      </tr>
                    <tr> <td>Apellidos: </td>   <td> {apellido}</td>  </tr>
                    <tr> <td>edad:      </td>   <td> {personaInfo.edad}</td>  </tr>
                    <tr> <td>nacionalidad:</td> <td> {personaInfo.nacionalidad}</td>  </tr>
                    <tr> <td>generos:      </td> <td> {personaInfo.genero}</td>  </tr>
    
                    
                </tbody>
                <button onClick={ () => fnsaludar(personaInfo.nombre)}className="btn btn-primary" aling="right">Saludar</button>
            </table>
            
        </div>
        
    )
    
}

export function Intereses(){

    return(
        <div>
            <h2>Estos son intereses</h2>
        </div>
    )
}
 