import '../Resources/css/Cabecera.css';
import Logo from '../Resources/Images/logo.jpeg';
import usuario from '../Resources/Images/admin.jpeg';

let Cabecera = (TipoDeUsuario) => {
    switch (TipoDeUsuario) {
        case "admin":
            TipoDeUsuario = ['Administrar usuarios', 'Facturacion', 'Productos', 'Estadisticas e Informes'];
            break
        case "usuario":
            TipoDeUsuario = ['Mis pedidos', 'Facturacion', 'Productos', 'Estadisticas e Informes']
            break
        case "desconocido":
            TipoDeUsuario = ['Ingresar', 'Registrarse']
            break
    }
    return (
        <div id="header">
            <div id="main-division">
                <div id="logo" > <img src={Logo} alt="" className='HeaderImage' /></div>
                <div id="menus">
                    <h1 id="titulo">EL BUEN SABOR</h1>
                    <div id="botones">
                        {TipoDeUsuario.map(x => <button class="menu-button">{x}</button>)} {/* mapeo el array para generar los botones necesarios */}
                    </div>
                </div>
                <div id="user" className='HeaderImage' ><img src={usuario} alt="" className='HeaderImage' /></div>
            </div>
            <hr />
        </div >
    )
}

export default Cabecera
