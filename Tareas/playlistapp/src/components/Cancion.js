
import React from "react";

export default function Cancion(props){
    console.log(props);
    return (
<div>
<br></br>
    <h2>Milky-Chance</h2>

<table class="table table-dark">
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
    </tbody>
</table>
<br></br>
<button onClick={ () => props.fun_mostrartitulo(props.titulo)} className="btn btn-primary" aling="center">Mostrar Titulo</button>
</div>
    )
}
