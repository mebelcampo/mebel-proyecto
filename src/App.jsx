
import { Routes, Route } from 'react-router-dom';

import AngelaMenublocks from './componets/AngelaMenublocks.jsx'
import Inicioblock from './componets/inicioblock.jsx'
import InicioSec from './pages/iniciosec.jsx';
import programa from './componets/programa.jsx'
import Programa from './componets/programa.jsx';
function App() {
  return (
    <>
      <div>
      <Inicioblock/>
        <Routes>0 
          <Route path='/' element={
            <>
           <InicioSec/>
            
            </>
            }></Route>
       
       <Route path='/programa' element={<>

      <Programa/>

       </>}></Route>
      </Routes>
      
    </div >
</>
);

}

export default App;