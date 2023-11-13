import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (productoId, nombreProducto, precioProducto) => {
    // Verifica si el producto ya está en el carrito
    const productoEnCarrito = carrito.find((item) => item.id === productoId);

    if (productoEnCarrito) {
      // Si ya está en el carrito, actualiza la cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: item.cantidad + 1, precio: precioProducto + item.precio }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si no está en el carrito, lo agrego con cantidad 1
      setCarrito((prevCarrito) => [
        ...prevCarrito, { id: productoId, cantidad: 1, nombre: nombreProducto, precio: precioProducto }]);
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