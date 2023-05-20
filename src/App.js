
import './App.css';
import Hola from './routers/Hola';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Tarea } from './routers/Tarea';
import './routers/style.css'
import Informacion from './routers/Informacion';
import { Docentes } from './routers/Docentes';

function App() {
  return (
    <>
      <body>
        <div className='general'>
          <Router>
            <div className='container'>
              <div>
                <h1>PANEL DE OPCIONES</h1>
              </div>
              <div>
              <Link to={'/'}><button id={"buttonAddNew2"} >INICIO</button></Link>
              <Link to={'/informacion'}><button id={"buttonAddNew2"} >INFORMACION</button></Link>
              <Link to={'/alumnos'}><button id={"buttonAddNew2"} >ALUMNOS</button></Link>
              <Link to={'/profesores'}><button id={"buttonAddNew2"} >MAESTROS</button></Link>
              </div>
            </div>
            <br/>
            <Routes>
              <Route path='/' element={<Hola />} />
              <Route path='/alumnos' element={<Tarea />} />
              <Route path='/profesores' element={<Docentes />} />
              <Route path='/informacion' element={<Informacion />} />
            </Routes>
          </Router>
        </div>
      </body>
    </>
  );
}

export default App;
