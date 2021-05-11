
import React from "react";

export default function Cancion(props){
    console.log(props);
    return (
<div>
<br></br>
    <h2>Milky-Chance</h2>

<table>
    <tbody>
    <tr>
        <td>Titulo:</td><td>{props.titulo}</td>
    </tr>
    <tr>
        <td>Duracion:</td><td>{props.duracion}</td>
    </tr>
    <tr>
        <td>Album:</td><td>{props.album}</td>
    </tr>
    <tr>
        <td>Numero:</td><td>{props.numero}</td>
    </tr>
    <tr>
        <td>Fecha de Creacion:</td><td>{props.fechacrea}</td>
    </tr>
    <tr>
        <td>
            <button onClick={ () => props.fun_mostrartitulo(props.titulo)}>Mostrar</button>
        </td>
    </tr>
    
    </tbody>
</table>
</div>
    )
}
