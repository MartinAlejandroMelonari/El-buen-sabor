import '../Resources/css/Cuerpo.css';
import Tarjetita from './TarjetaComida'
import Lupa from '../Resources/Images/Lupa.png'


let Cuerpo = () => {

    return (
        <div className='padre'>
            <div className='upperBody'>
            </div>
            <div className='bottomBody'>
                <div className='comida'>
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="alcachofas hibridas" price="$123" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="pizza" price="$153" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="papas" price="$173" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="panchos" price="$113" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="merca de unicornio" price="$73" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="rivotril" price="$23" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="pe pe perreito" price="$1" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="oa" price="$133" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="salta pepito" price="$16" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="junin" price="$1673" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="alcachofas hibridas" price="$16" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="alcachofas hibridas" price="$63" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="alcachofas hibridas" price="$83" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="alcachofas hibridas" price="$93" />
                    <Tarjetita imgSrc="https://picsum.photos/300/200" title="alcachofas hibridas" price="$13" />
                </div>
                <div className='barraLateral'>Barra navegacional
                    <div className='buscador'><input type="text" placeholder='Buscar' className='text-buscador' />
                        <button className='btn-buscador'><img src={Lupa} alt="" className='lupa' /></button></div>
                    <div className='filter-container'>
                        Filtrar
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    )


}

export default Cuerpo