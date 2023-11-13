import '../../Resources/css/FinalizarCompra.css'
import { useCarrito } from '../NuevoPedido/Contexto/ContextoCarrito.jsx';
import Pagar from './Pagar.jsx';
import { useState } from 'react';

export const finalizarCompra = ({cambiarAComponente}) =>{
    const { carrito, agregarAlCarrito } = useCarrito();
    const CambiarAFinalizarCompra = () => {
        console.log("Estoy yendo hacia atrás");
        cambiarAComponente('productos');
      };
    const RealizarPedido = () =>{
        const [pedido, setPedido]= useState({

        })
    }  
      const RemoverProducto = (id) => {
        const productoEnCarrito = carrito.find((item) => item.id === id);
    
        if (productoEnCarrito) {
          // Si la cantidad es mayor que 1, reducir en 1, de lo contrario, eliminar el producto del carrito
          if (productoEnCarrito.cantidad > 1) {
            agregarAlCarrito(id, productoEnCarrito.nombre, productoEnCarrito.precioVenta, 2);
          } else {
            // Eliminar el producto del carrito
            agregarAlCarrito(id, productoEnCarrito.nombre, productoEnCarrito.precioVenta, 3);
            CambiarAFinalizarCompra()
          }
        }
      };
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
    <table>
        <tr>
            <th id="tituloCarrito"><h1 >Carrito de Compras</h1></th>
        </tr>
        <tr>
            <th>Nombre del producto</th>
            <th>Cantidad</th>   
            <th>Precio</th>   
        </tr>
        {carrito.map((item) => (
          
          <tr key={item.id}>         
        <td>{item.nombre}</td>
        <td>{item.cantidad}</td>
        <td>${item.precio.toFixed(2)}</td>
        <td><button onClick={() => RemoverProducto(item.id)}>Quitar</button></td>
        </tr>
    ))}
    <tr>
      <td></td>
      <td>Total</td>
      <td>{TotalCarrito()}</td></tr>
      <tr>
        <td></td>
        <td><button onClick={RealizarPedido}>Realizar Pedido</button></td>
        <td><button onClick={CambiarAFinalizarCompra}>Volver atras</button></td>
      </tr>
    </table>
    <Pagar />
    </div>



    )



}
export default finalizarCompra