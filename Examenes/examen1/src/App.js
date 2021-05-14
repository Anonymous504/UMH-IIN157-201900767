import logo from './calificaciones.png';
import './App.css';
import './components/Alumno';
import "bootstrap/dist/css/bootstrap.min.css";
import Alumno from './components/Alumno';

function App() {
  
  const o_alumno1 = {

id:"0801-1993-21271",
nombre:"Joseph Andino",
nacimiento:"13 Octubre 1993",
notas:[100,100,100]
};

const o_alumno2 = {

  id:"0801-1994-21548",
  nombre:"Luis Alvarez",
  nacimiento:"25 Marzo 1994",
  notas:[75,84,88]
  };

  const o_alumno3 = {

    id:"0801-1999-25467",
    nombre:"Monica Gomez",
    nacimiento:"15 Agosto 1999",
    notas:[85,80,91]
    };
  
  

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <Alumno 
        alumnoInfo = {o_alumno1}/>

        <Alumno 
        alumnoInfo = {o_alumno2}/>

        <Alumno 
        alumnoInfo = {o_alumno3}/>

       
        

      </header>
      
    </div>
  );
}

export default App;
