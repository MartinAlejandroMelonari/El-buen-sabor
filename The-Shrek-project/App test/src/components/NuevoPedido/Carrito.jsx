import { useCarrito } from './Contexto/ContextoCarrito.jsx';

const Carrito = () => {
  const { carrito } = useCarrito();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.map((item) => (
        <div key={item.id}>
          <p>Producto: {item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio total: ${item.precio.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Carrito;