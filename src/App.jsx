
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Programa from './pages/programa.jsx';
import AngelaMenublocks from './componets/AngelaMenublocks.jsx'
import Inicioblock from './componets/inicioblock.jsx'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={
            <>
            <Inicio></Inicio>
            <Inicioblock/>
            
            </>
            }></Route>
        <Route path='/Programa' element={<Programa />}></Route>
       
      </Routes>
      
    </div >
</>
);

}

export default App;