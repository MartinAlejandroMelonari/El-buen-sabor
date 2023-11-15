import DropdownMedioDePago from '../MenusDesplegables/MenuDesplegableMedioDePago.jsx';
import DropdownTipoEntrega from '../MenusDesplegables/MenuDesplegableTipoDeEnvio.jsx';
import { useCarrito } from './Contexto/ContextoCarrito.jsx';
import { useState } from 'react';
import axiosInstance from '../Connections/axiosConfig.jsx';

const RealizarPedido = () =>{
    const { carrito } = useCarrito();
    const [datosCabeceraPedido, setDatosCabeceraPedido] = useState({
        total: '',
        totalCosto: '',
        estado: 0,      
        estado_pago: 0,
        forma_pago: 0,
        tipo_envio: 0,
        /* domicilio:{
            calle:'',
            numero:0,
            numeroDpto:0,
            pisoDpto:0

        }, */
        cliente:{
            id:0 //ver como obtengo el id desde el token
        },
        detallePedido:[{id:3}]
    });
    // Función para obtener la hora actual más 30 minutos
  
    const TotalCarrito = () => {
   
        let total = 0
        if (carrito.length > 0){
            carrito.forEach(element => {
            total += element.precio
          });    
        }
    return total.toFixed(2)}
    const TotalCostoCarrito = () => {
   
        let total = 0
        if (carrito.length > 0){
            carrito.forEach(element => {
            total += element.costo
          });    
        }
    return total.toFixed(2)}
    const CrearPedido = async () => {
      try {
        const respuesta = await axiosInstance.post(
          `/api/v1/Pedido`,
          datosCabeceraPedido
        );
        console.log(respuesta.data)
        return respuesta.data;
      } catch (error) {
        return console.error('Error al obtener productos desde la API:', error);
         }
    };
    const handleSubmit = (e) => {
        setDatosCabeceraPedido({
            ...datosCabeceraPedido,total : TotalCarrito(),totalCosto: TotalCostoCarrito()})
        e.preventDefault();
        console.log(datosCabeceraPedido)
        
        const camposCompletos = Object.values(datosCabeceraPedido).every((campo) => (campo !== ''));
        if (camposCompletos) {
            console.log("Hubiera enviado")
            CrearPedido()
            
       /*  const url = `/api/v1/Pedido`
        console.log("Estoy enviando :", datosCabeceraPedido);
        //Llamado a la APi con los datos
        axiosInstance.post(`/api/v1/Pedido`,datosCabeceraPedido,{})
        window.location.reload(); */
        }else{
            console.log("Complete todos los campos")
            console.log(datosCabeceraPedido)
        }
    };
    const handleFormaPagoDropdownSelect = (selectedOption) => {
        setDatosCabeceraPedido({ ...datosCabeceraPedido, forma_pago: selectedOption });
        console.log(datosCabeceraPedido)
      };
      const handleTipoEnvioDropdownSelect = (selectedOption) => {
        setDatosCabeceraPedido({ ...datosCabeceraPedido, tipo_envio: selectedOption });
        console.log(datosCabeceraPedido)
      };


    
      return (
        <>
          <form onSubmit={handleSubmit}>
            {/* <label>
              Domicilio
            </label>
            <br />
            <label>
              Calle
              <input
                type="text"
                name="calle"
                value={datosCabeceraPedido.domicilio.calle}
                onChange={(e) =>
                  setDatosCabeceraPedido((prevDatos) => ({
                    ...prevDatos,
                    domicilio: { ...prevDatos.domicilio, calle: e.target.value },
                  }))
                }
              />
            </label>
            <br />
            <label>
              Numero
              <input
                type="text"
                name="numero"
                value={datosCabeceraPedido.domicilio.numero}
                onChange={(e) =>
                  setDatosCabeceraPedido((prevDatos) => ({
                    ...prevDatos,
                    domicilio: { ...prevDatos.domicilio, numero: e.target.value },
                  }))
                }
              />
            </label>
            <br />
            <label>
              Piso
              <input
                type="text"
                name="pisoDpto"
                value={datosCabeceraPedido.domicilio.pisoDpto}
                onChange={(e) =>
                  setDatosCabeceraPedido((prevDatos) => ({
                    ...prevDatos,
                    domicilio: { ...prevDatos.domicilio, pisoDpto: e.target.value },
                  }))
                }
              />
            </label>
            <br />
            <label>
              Departamento
              <input
                type="text"
                name="numeroDpto"
                value={datosCabeceraPedido.domicilio.numeroDpto}
                onChange={(e) =>
                  setDatosCabeceraPedido((prevDatos) => ({
                    ...prevDatos,
                    domicilio: { ...prevDatos.domicilio, numeroDpto: e.target.value },
                  }))
                }
              />
            </label> */}
            <DropdownMedioDePago onSelectOption={handleFormaPagoDropdownSelect} />
            <br />
            <DropdownTipoEntrega onSelectOption={handleTipoEnvioDropdownSelect} />
            <br />
            <button type="submit">asdad</button>
          </form>
          <div>asdasd</div>
        </>
      );
}
export default RealizarPedido