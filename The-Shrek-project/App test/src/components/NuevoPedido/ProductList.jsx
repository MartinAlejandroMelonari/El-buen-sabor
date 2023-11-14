import React, { useEffect, useState } from 'react';
import Tarjetita from '../TarjetaComida.jsx'
import axios from 'axios';
import '../../Resources/css/TarjetaComida.css'
import { useCarrito } from './Contexto/ContextoCarrito.jsx'

const ProductoList = () => {
    const [productos, setProductos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const { agregarAlCarrito } = useCarrito();
  
    useEffect(() => {
      const obtenerProductos = async () => {
        const nuevosProductos = await obtenerProductosDesdeAPI(pagina);
        setProductos(nuevosProductos);
      };
      obtenerProductos();
      console.log("Estoy aca")
    }, []);
    
    
    
    const handleAgregarAlCarrito = (id, nombre, precio) => {
      // Lógica para agregar el producto al carrito
      console.log(`Producto con ID ${id} (${nombre}) añadido al carrito`);
      agregarAlCarrito(id, nombre, precio, 1);
    };
    const obtenerProductosDesdeAPI = async (pagina) => {
      try {
        const parametros = {
          pageable: {
            page: pagina,
            pageSize: 6,
          },
        };
        console.log(parametros)
        const respuesta = await axios.get(
          'http://localhost:9000/api/v1/Producto',
          parametros
        );
        return respuesta.data;
      } catch (error) {
        console.error('Error al obtener productos desde la API:', error);
        return [];
      }
    };
  
    const renderizarGrupos = () => {
      const grupos = [];
      for (let i = 0; i < productos.length; i += 3) {
        const grupo = productos.slice(i, i + 3);
        grupos.push(
          <div key={i} className='grupo-tarjetas'>
            {grupo.map((producto, index) => (
              <div key={producto.id} className='card-container'  style={{ marginRight: index < 2 ? '150px' : 0 }}>
                <img
                  src={producto.urlImagen}
                  alt={producto.denominacion}
                  className='card-img'
                />
                <h1 className='card-title'>{producto.denominacion}</h1>
                <h3 className='card-price'>{producto.precioVenta}</h3>
                <button className='card-btn' onClick={() => handleAgregarAlCarrito(producto.id, producto.denominacion, producto.precioVenta)}>Agregar al carrito</button>
              </div>
            ))}
          </div>
        );
      }
      return grupos;
    };
  
    return <div className='comida'>{renderizarGrupos()}</div>;
  };
  
  export default ProductoList;