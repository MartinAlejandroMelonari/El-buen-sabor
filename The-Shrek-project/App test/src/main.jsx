import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecera from './components/Cabecera.jsx';
import Cuerpo from './components/Cuerpo.jsx';
import Tarjetita from './components/TarjetaComida.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Cabecera('admin')}
    <Cuerpo />

  </React.StrictMode>,
)
