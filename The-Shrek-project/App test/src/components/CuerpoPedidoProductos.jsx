import '../Resources/css/Cuerpo.css';
import { useState } from 'react';
import Lupa from '../Resources/Images/Lupa.png'
import ProductoList from './NuevoPedido/ProductList.jsx';
import '../Resources/css/TarjetaComida.css'
import Carrito from './NuevoPedido/Carrito.jsx';
import FinalizarCompra from './NuevoPedido/FinalizarCompra.jsx'

let CuerpoPedidoProductos = () => {
    const [componenteActual, setComponenteActual] = useState('productos');
    const cambiarAComponente = (parametro) => {
        setComponenteActual(parametro);
      };
    return (
       
            <div className='bottomBody'>
                <div className='barraCentral'>
                    
                {componenteActual === 'productos' && (
                <ProductoList />
                )}
                {componenteActual === 'finalizarCompra' && (
                <FinalizarCompra cambiarAComponente={cambiarAComponente}/>
                )}
                </div>
                <div className='barraLateral'>
                    <div className='buscador'><input type="text" placeholder='Buscar' className='text-buscador' />
                        <button className='btn-buscador'><img src={Lupa} alt="" className='lupa' /></button></div>
                    <div className='filter-container'>
                        <br />    Filtrar
                        <br />
                        <div className='btn-radio'>
                            <form >
                                <fieldset>
                                    <div>    <input type="radio" name='filtro' />Entradas</div>
                                    <div>    <input type="radio" name='filtro' />Hamburguesas</div>
                                    <div>    <input type="radio" name='filtro' />Pizzas</div>
                                    <div>    <input type="radio" name='filtro' />Ensaladas</div>
                                    <div>    <input type="radio" name='filtro' />Bebidas con alcohol</div>
                                    <div>    <input type="radio" name='filtro' />Bebidas sin alcohol</div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <Carrito cambiarAComponente={cambiarAComponente} />
                </div>
                <i></i>
            </div>
        
    )


}


export default CuerpoPedidoProductos