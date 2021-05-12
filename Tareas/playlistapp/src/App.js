import logo from './milky-chance.png';
import './App.css';
import './components/Cancion';
import "bootstrap/dist/css/bootstrap.min.css";
import Cancion,{Cancion2} from './components/Cancion';

function App() {
  
  const titulo = "Stolen Dance";
  const dura = "5:13";
  const album = "Sadnecessary";
  const num = "1";
  const fechacrea = " 05 Abril 2013";

  const o_cancion = {

        titulo:"Blossom",
        duracion:"3:32",
        album:"Blossom",
        numero:"2",
        fechacrea:" 05 Mayo 2017"
  };

  const fun_mostrartitulo = (props) => {
    alert("Nombre de la Cancion: "+ props)
  };


  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
     <Cancion 
        titulo={titulo}
        duracion={dura}
        album={album}
        numero={num}
        fechacrea={fechacrea}
        fun_mostrartitulo={fun_mostrartitulo}
        /> 
        
        <Cancion2 cancionInfo = {o_cancion}
        fun_mostrartitulo={fun_mostrartitulo}/>

      </header>
      
    </div>
  );
}

export default App;
