import './App.css';
import './Estilos/Testimonio.css'
import { Testimonio } from './Componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'></div>
        <h1>Esto es lo que dicen nuestros bros</h1>
        <Testimonio 
          nombre="CarlosAMB" 
          ubicacion="MisantLa" 
          cargo="No hace nada" 
          testimonio="No me gustó para nada pero siempre se aprende algo nuevo" 
          idImg = '01'/>
        <Testimonio 
          nombre="Arduino" 
          ubicacion="tepito" 
          cargo="Quemarse" 
          testimonio="Funciona pero uno que es bestia" 
          idImg = '02'/>
        <Testimonio 
          nombre="USB 3.0" 
          ubicacion="Tu corazon" 
          cargo="Conectar" 
          testimonio="Funciona pero uno que es bestia" 
          idImg = '03'/>
    </div>
  );
}

export default App;
