import { useCarrito } from './Contexto/ContextoCarrito.jsx';
import '../../Resources/css/Carrito.css'

const Carrito = ({cambiarAComponente}) => {
  const { carrito } = useCarrito();
  const CambiarAFinalizarCompra = () => {
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
        <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
      {carrito.map((item) => (
          
            <tr key={item.id}>         
          <td>{item.nombre}</td>
          <td>{item.cantidad}</td>
          <td>${item.precio.toFixed(2)}</td>
          </tr>
      ))}
      </tbody>
      <tfoot>
      <tr>
        <td></td>
        <td>Total</td>
        <td>{TotalCarrito()}</td></tr>
      <tr>
        {(carrito.length > 0) &&
          <td>
          <button onClick={CambiarAFinalizarCompra}>Ir a pagar</button>
          </td>

        }
       </tr>
       </tfoot>
      </table>
    </div>
  );
};

export default Carrito;