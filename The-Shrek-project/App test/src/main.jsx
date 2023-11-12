import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecera from './components/Cabecera.jsx';
import Cuerpo from './components/Cuerpo.jsx';
import Tarjetita from './components/TarjetaComida.jsx';
import { FormularioRubroProducto } from './components/Formularios/FormularioRubroProducto.jsx';
import { FormularioProducto } from './components/Formularios/FormularioProducto.jsx';
import DropdownMenu from './components/MenusDesplegables/MenuDesplegableRubroProducto.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Cabecera()}
    <FormularioProducto />
  </React.StrictMode>,
)
