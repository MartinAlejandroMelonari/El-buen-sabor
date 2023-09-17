import '../Resources/css/TarjetaComida.css'

const Tarjetita = ({
    imgSrc,
    title,
    price
}) => {
    return (
        <div className='card-container'>
            <img src={imgSrc} alt={title} className='card-img' />
            <h1 className='card-title'>{title}</h1>
            <h3 className='card-price'>{price}</h3>
            <button className='card-btn'>Sumar al carrito</button>
        </div>
    )
}
export default Tarjetita    