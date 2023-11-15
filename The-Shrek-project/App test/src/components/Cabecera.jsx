import '../Resources/css/Cabecera.css';
import Logo from '../Resources/Images/logo.jpeg';
import usuario from '../Resources/Images/admin.jpeg';
import { Link } from 'react-router-dom';
import useIsLoggedIn from './Hooks/IsLoggedIn';

const Cabecera = ({TipoDeUsuario = 'usuario'}) => {
    let Navegacion = []
    const LoggedIn = useIsLoggedIn();
    if (LoggedIn){
    switch (TipoDeUsuario) {
        
        case "admin":
            Navegacion = [
                {ruta:'',nombre:'Administrar usuarios'},{ruta:'',nombre:'Facturacion'},
                {ruta:'',nombre:'Productos'},{ruta:'',nombre:'Estadisticas e Informes'}]
            break
        case "usuario":
            Navegacion = [{ruta:'',nombre:'Mis pedidos'},{ruta:'/Productos',nombre:'Productos'},{ruta:'',nombre:'Logout'}]
            break
    }
    }else {
        Navegacion = [{ruta:'/Login',nombre:'Ingresar'},{ruta:'',nombre:'Home'},{ruta:'/Register',nombre:'Registrarse'}]
    }
    return (
        <div id="header">
            <div id="main-division">
                <div id="logo" > <img src={Logo} alt="" className='HeaderImage' /></div>
                <div id="menus">
                    <h1 id="titulo">EL BUEN SABOR</h1>
                    
                    <div id="botones">
                    <nav>
                        {Navegacion.map((x,index) => 
                        <Link key={index} to={x.ruta}>
                        <button className="menu-button" >{x.nombre}</button>
                        </Link>)} {/* mapeo el array para generar los botones necesarios */}
                    </nav>
                    </div>
                    
                </div>
                <div id="user" className='HeaderImage' ><img src={usuario} alt="" className='HeaderImage' /></div>
            </div>
            <hr />
        </div >
    )
}

export default Cabecera
