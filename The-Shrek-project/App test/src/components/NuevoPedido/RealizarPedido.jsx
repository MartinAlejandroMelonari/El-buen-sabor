import DropdownMedioDePago from '../MenusDesplegables/MenuDesplegableMedioDePago.jsx';
import DropdownTipoEntrega from '../MenusDesplegables/MenuDesplegableTipoDeEnvio.jsx';
import { useCarrito } from './Contexto/ContextoCarrito.jsx';
import { useEffect, useState } from 'react';
import axiosInstance from '../Connections/axiosConfig.jsx';

const RealizarPedido = () =>{
    const { carrito } = useCarrito();
    const [numeroPedido, setNumeroPedido] = useState()
    const [detallePedido, setDetallePedido] = useState({
          cantidad: 0,
          subtotal: 0,
          subtotalCosto: 0,
          producto:{id: 0},
          pedido:{
            id:0
          }})
    const [idDetallesPedido, setIdDetallesPedido] = useState([{}])
    const [datosCabeceraPedido, setDatosCabeceraPedido] = useState({
        total: '',
        totalCosto: '',
        estado: 0,      
        estadoPago: 0,
        formaPago: 0,
        tipoEnvio: 0,
        /* domicilio:{
            calle:'',
            numero:0,
            numeroDpto:0,
            pisoDpto:0

        }, */
        detallePedido:[]
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
   
    const CrearDetallePedido = async () => {
      try {
        const detallesPedidoArray = carrito.map((item) => ({
          cantidad: item.cantidad,
          subtotal: item.precio,
          subtotalCosto: item.costo,
          producto: { id: item.id },
          pedido: {
            id: numeroPedido
          }
        }));
        const respuestas = await Promise.all(detallesPedidoArray.map(detalle => axiosInstance.post('api/v1/e/DetallePedido', detalle)));
        // Actualizar el estado después de que todas las solicitudes POST hayan tenido éxito
        setIdDetallesPedido((prevIds) => [
          ...prevIds,
          ...respuestas.map(respuesta => ({ id: respuesta.data.id }))
        ]);
        setDatosCabeceraPedido((prevDatos) => ({
          ...prevDatos,
          detallePedido: [
            ...prevDatos.detallePedido,
            ...respuestas.map(respuesta => ({ idDetallePedido: respuesta.data.id }))
          ]
        }));
        console.log("detalles de pedidos creados ", idDetallesPedido)
        console.log("Detalles pedidos creados con éxito");
      } catch (error) {
        console.error('Algo salió mal: ', error);
      }
    };
    const CrearPedido = async () => {
      try {
        const respuesta = await axiosInstance.post(
          `/api/v1/e/Pedido`,
          datosCabeceraPedido
        );
        setNumeroPedido(respuesta.data.id)
        console.log(respuesta.data)
        return respuesta.data;
      } catch (error) {
        return console.error('Error al obtener productos desde la API:', error);
         }
      
    };
    const handleSubmit = async (e) => {
      setDatosCabeceraPedido((prevDatos) => ({
        ...prevDatos,
        total: TotalCarrito(),
        totalCosto: TotalCostoCarrito(),
        cliente: { id: localStorage.getItem('Id') }
      }));
        e.preventDefault();
        console.log(datosCabeceraPedido)
        const camposCompletos = Object.values(datosCabeceraPedido).every((campo) => (campo !== ''));
        if (camposCompletos) {
          CrearDetallePedido().then(()=>{
              console.log("Hubiera enviado pedido")
              return CrearPedido().then(()=>{
                setDatosCabeceraPedido()
                setDetallePedido()
                setNumeroPedido()
                setIdDetallesPedido()
              })
            }).catch((error)=>{
              console.error("Hubo un error ", error)
            })
            
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