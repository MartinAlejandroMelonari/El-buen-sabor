import { useState } from "react";
import axios from 'axios'
import DropdownMenu from "../MenusDesplegables/MenuDesplegableRubroProducto";
import '../../Resources/css/FormularioProducto.css';

export const FormularioProducto = () => {
    const [datosFormulario, setDatosFormulario] = useState({
        denominacion: '',
        descripcion: '',
        tiempoEstimadoCocina: 0,
        precioVenta: 0, 
        costo: 0,      
        urlImagen: '',
        receta: {
            nombreReceta: '',
            instruccion: '',
            duracionReceta: 0
        },
        rubroProducto: {
            id: 0
        }
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setDatosFormulario({...datosFormulario, [name]:value});
    };
    const handleDropdownSelect = (selectedOption) => {
        setDatosFormulario({ ...datosFormulario, rubroProducto: { id:selectedOption } });
      };
    const handleSubmit = (e) => {
        const url = 'http://localhost:9000/api/v1/Producto'
        e.preventDefault();
        const datosFormularioConId = {
            ...datosFormulario,
            receta: {
                nombreReceta: datosFormulario.receta.nombreReceta,
                instruccion: datosFormulario.receta.instruccion,
                duracionReceta: datosFormulario.receta.duracionReceta,


            },
            rubroProducto: {
                id: datosFormulario.rubroProducto.id
            }
        };
        
        console.log("Estoy enviando :", datosFormularioConId);
        const camposCompletos = Object.values(datosFormularioConId).every((campo) => (campo !== '' && campo !== 0 && campo !== null));
        if (camposCompletos) {
        //Llamado a la APi con los datos
            axios.post(url,datosFormularioConId,{})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error.response.data);  // Muestra detalles del error devueltos por el servidor
            });
        } else {
            console.log('Por favor, complete todos los campos antes de enviar el formulario.');
          }

    };

        return(
            <div className='formulario_producto'>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre Producto
                    <input type="text" name="denominacion" value={datosFormulario.denominacion} onChange={handleChange} />
                </label>
                <label>
                    Descripcion Producto
                    <input type="text" name="descripcion" value={datosFormulario.descripcion} onChange={handleChange} />
                </label>
                <label>
                    Tiempo estimado de cocina en minutos
                    <input type="text" name="tiempoEstimadoCocina" value={datosFormulario.tiempoEstimadoCocina} onChange={handleChange} />
                </label>
                <label>
                    Precio Venta
                    <input type="text" name="precioVenta" value={datosFormulario.precioVenta} onChange={handleChange} />
                </label>
                <label>
                    Costo por unidad
                    <input type="text" name="costo" value={datosFormulario.costo} onChange={handleChange} />
                </label>
                <label>
                    Link a la imagen
                    <input type="text" name="urlImagen" value={datosFormulario.urlImagen} onChange={handleChange} />
                </label>
                <label>
                    Nombre receta
                    <input type="text" value={datosFormulario.receta.nombreReceta} onChange=
                    {(e) => setDatosFormulario({ ...datosFormulario, receta: { nombreReceta: e.target.value } })} />
                </label>
                <label>
                    Instrucciones receta
                    <input type="text" value={datosFormulario.receta.instruccion} onChange=
                    {(e) => setDatosFormulario({ ...datosFormulario, receta: { instruccion: e.target.value } })} />
                </label>
                
                <label>
                    Duracion receta
                    <input type="text" value={datosFormulario.receta.duracionReceta} onChange=
                    {(e) => setDatosFormulario({ ...datosFormulario, receta: { duracionReceta: e.target.value } })} />
                </label>
                <DropdownMenu url='http://localhost:9000/api/v1/RubroProducto' onSelectOption={handleDropdownSelect}/>
                
                <br />
                <button type="submit">Crear</button>
            </form>
            </div>
        );

}