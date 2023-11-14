import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (productoId, nombreProducto, precioProducto, accion) => {
    // Verifica si el producto ya está en el carrito
    const productoEnCarrito = carrito.find((item) => item.id === productoId);
  
    if (productoEnCarrito) {
      // Si ya está en el carrito
      let nuevaCantidad = productoEnCarrito.cantidad;
  
      // Realiza la acción según el valor de `accion`
      switch (accion) {
        case 1:
          // Suma 1 a la cantidad
          nuevaCantidad += 1;
          break;
        case 2:
          // Resta 1 a la cantidad y asegura que no sea menor que 0
          nuevaCantidad = Math.max(0, nuevaCantidad - 1);
  
          // Si la nueva cantidad es 0, elimina el producto
          if (nuevaCantidad === 0) {
            const nuevoCarritoSinProducto = carrito.filter((item) => item.id !== productoId);
            setCarrito(nuevoCarritoSinProducto);
            return; // Salimos de la función ya que el producto fue eliminado
          }
          break;
        case 3:
          // Elimina el producto del carrito
          // eslint-disable-next-line no-case-declarations
          const nuevoCarritoSinProducto = carrito.filter((item) => item.id !== productoId);
          setCarrito(nuevoCarritoSinProducto);
          return; // Salimos de la función ya que el producto fue eliminado
        default:
          break;
      }
  
      // Actualiza el carrito con la nueva cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: nuevaCantidad, precio: precioProducto * nuevaCantidad }
          : item
      );
  
      setCarrito(nuevoCarrito);
    } else {
      // Si no está en el carrito
      if (accion === 1) {
        // Si la acción es 1, lo agrega con cantidad 1
        setCarrito((prevCarrito) => [
          ...prevCarrito, { id: productoId, cantidad: 1, nombre: nombreProducto, precio: precioProducto }
        ]);
      }
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};