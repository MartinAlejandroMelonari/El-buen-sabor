import React, { useEffect, useState } from 'react';
import axiosInstance from '../Connections/axiosConfig.jsx';
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
    }, [pagina]);
    
    
    
    const handleAgregarAlCarrito = (id, nombre, precio, costo) => {
      agregarAlCarrito(id, nombre, precio, 1,costo);
    };
    const obtenerProductosDesdeAPI = async (pagina) => {
      try {
        const parametros = {
          pageable: {
            page: pagina,
            pageSize: 6,
          },
        };
        const respuesta = await axiosInstance.get(
          `/api/v1/e/Producto`,
          parametros
        );
        return respuesta.data;
      } catch (error) {
        console.error('Error al obtener productos desde la API:', error);
        return [];
      }
    };
  
    return (
            <div className='comida'>{productos.map((producto) => (
              <div key={producto.id} className='card-container'>
                <img
                  src={producto.urlImagen}
                  alt={producto.denominacion}
                  className='card-img'
                />
                <h1 className='card-title'>{producto.denominacion}</h1>
                <h3 className='card-price'>${producto.precioVenta}</h3>
                <button className='card-btn' onClick={() => handleAgregarAlCarrito(producto.id, producto.denominacion, producto.precioVenta, producto.costo)}>Agregar al carrito</button>
              </div>
            ))}
            </div>)
  };
  
  export default ProductoList;