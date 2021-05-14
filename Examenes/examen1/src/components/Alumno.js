import React from "react";



export default function Alumno(props){
    console.log(props);

    let notas = (props.alumnoInfo.notas);
    let count = notas.length;
    let suma=0;
    let prom;
    notas.forEach (function(numero)
    {suma += numero;});
    console.log(suma);
    prom=suma/count;

    return (
<div>
<br></br>
    <h2>Calificación</h2>

<table class="table table-dark">
    <tbody>
    <tr>
        <td>ID:</td><td>{props.alumnoInfo.id}</td>
    </tr>
    <tr>
        <td>Nombre:</td><td>{props.alumnoInfo.nombre}</td>
    </tr>
    <tr>
        <td>Nacimiento:</td><td>{props.alumnoInfo.nacimiento}</td>
    </tr>
    <tr>
        <td>Nota Promedio:</td><td>{prom}</td>
    </tr>
    
    </tbody>
</table>
<br></br>


</div>
    ) 
}










