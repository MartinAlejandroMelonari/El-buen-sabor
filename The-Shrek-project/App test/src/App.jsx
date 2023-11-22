import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Resources/css/App.css'
import Cabecera from './components/Cabecera';
import CuerpoPedidoProductos from './components/CuerpoPedidoProductos';
import { FormularioProducto } from './components/Formularios/FormularioProducto';
import { CarritoProvider } from './components/NuevoPedido/Contexto/ContextoCarrito';
import { Registro } from './components/Formularios/Registro';
import { Login } from './components/Formularios/Login';
import Logout from './components/Seguridad/Logout';
import PrivateRoute from './components/Seguridad/PrivateRoute';
import { AuthenticationGuard } from './components/Auth0/AuthenticationGuard';

function App() {

  return (
    <CarritoProvider>
    <Router>
      
        <Cabecera />
        <div className='padre'>
        
          <Routes>
            <Route path="" element={<AuthenticationGuard component={CuerpoPedidoProductos}/>} />
            <Route path="/NuevoProducto" element={<AuthenticationGuard component={<PrivateRoute element={< FormularioProducto/>}/>}/>} />
            <Route path="/Register" element={<AuthenticationGuard component={<Registro />}/>}/>
            <Route path="/Login" element={<AuthenticationGuard component={<Login />}/>}/>
            <Route path="/Logout" element={<AuthenticationGuard component={<Logout />}/>} />
          </Routes>

        
        </div>
      
    </Router>
    </CarritoProvider>
  );
};

export default App;
