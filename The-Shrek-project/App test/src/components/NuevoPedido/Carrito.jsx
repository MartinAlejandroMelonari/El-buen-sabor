import { useCarrito } from './Contexto/ContextoCarrito.jsx';
import './Carrito.css'

const Carrito = ({cambiarAComponente}) => {
  const { carrito } = useCarrito();
  const CambiarAFinalizarCompra = () => {
    console.log("estoy andando");
    cambiarAComponente('finalizarCompra');
  }
  const TotalCarrito = () => {
   
    let total = 0
    if (carrito.length > 0){
      
      carrito.forEach(element => {
        total += element.precio
      });

    
    }
    return total.toFixed(2)}
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <table>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      {carrito.map((item) => (
          
            <tr key={item.id}>         
          <td>{item.nombre}</td>
          <td>{item.cantidad}</td>
          <td>${item.precio.toFixed(2)}</td>
          </tr>
      ))}
      <tr>
        <td></td>
        <td>Total</td>
        <td>{TotalCarrito()}</td></tr>
      <tr>
        {(carrito.length > 0) &&
          <button onClick={CambiarAFinalizarCompra}>Ir a pagar</button>


        }
       </tr>
        
      </table>
    </div>
  );
};

export default Carrito;