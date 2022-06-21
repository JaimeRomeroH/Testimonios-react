import './App.css';
import Testimonio from './componentes/testimonio';
function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <div className="contenedor-principal">
       
        <Testimonio />
      </div>  
    </div>
  );
}

export default App;
