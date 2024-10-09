
import { Routes, Route } from 'react-router-dom';

import MebelMenublocks from './componets/MebelMenublocks.jsx';
import Inicioblock from './componets/inicioblock.jsx';
import Programa from './componets/programa.jsx';
import Usestate from './componets/Usestate.jsx';
import Usestateobjetos from './componets/Usestateobjetos.jsx';
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

       <Route path='/Usestate' element={<>
       
       <Usestate/>
       
       </>} ></Route>

       <Route path='/Usestateobjetos' element={<>

       <Usestateobjetos/>

       </>}></Route>

      </Routes>
      
    </div >
</>
);

}

export default App;