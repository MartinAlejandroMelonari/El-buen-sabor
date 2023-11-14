import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Resources/css/App.css'
import Cabecera from './components/Cabecera';
import CuerpoPedidoProductos from './components/CuerpoPedidoProductos';
import { FormularioProducto } from './components/Formularios/FormularioProducto';
import { CarritoProvider } from './components/NuevoPedido/Contexto/ContextoCarrito';
import { Registro } from './components/Formularios/Registro';
import { Login } from './components/Formularios/Login';
import PrivateRoute from './components/Seguridad/PrivateRoute';
import PublicRoute from './components/Seguridad/PublicRoutes';

function App() {

  return (
    <CarritoProvider>
    <Router>
      
        <Cabecera />
        <div className='padre'>
        
          <Routes>
            <Route path="" element={<CuerpoPedidoProductos />} />
            <Route path="/NuevoProducto" element={<PrivateRoute element={< FormularioProducto />}/>} />
            <Route path="/Register" element={<PublicRoute element={<Registro />}/>}/>
            <Route path="/Login" element={<PublicRoute element={<Login />}/>}/>
          </Routes>

        
        </div>
      
    </Router>
    </CarritoProvider>
  );
};

export default App;
