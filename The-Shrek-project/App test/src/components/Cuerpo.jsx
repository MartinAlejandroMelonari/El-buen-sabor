import '../Resources/css/Cuerpo.css';
import Tarjetita from './TarjetaComida'
import Lupa from '../Resources/Images/Lupa.png'
import ProductoList from './NuevoPedido/ProductList';
import '../Resources/css/TarjetaComida.css'
import { CarritoProvider } from './NuevoPedido/Contexto/ContextoCarrito.jsx';
import ComponenteConCarrito from './NuevoPedido/Carrito.jsx';

let Cuerpo = () => {

    return (
        <div className='padre'>
            <div className='bottomBody'>
                <div className='comida'>
                    
                    <ProductoList />
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
                    <ComponenteConCarrito />
                </div>
                <i></i>
            </div>
        </div >
    )


}


export default Cuerpo