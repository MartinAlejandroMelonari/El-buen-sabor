import { useState } from "react";
import axios from 'axios'

export const FormularioRubroProducto = () => {
    const [esVisible, setEsVisible] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState({
        descripcionCategoriaProducto:'',
        nombreCategoriaProducto:''
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setDatosFormulario({...datosFormulario, [name]:value});
    };

    const mostrarOcultar = () => {
        // Cambia el estado para alternar entre visible y oculto
        setEsVisible(!esVisible);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:9000/api/v1/RubroProducto'
        console.log("Estoy enviando :", datosFormulario);
        //Llamado a la APi con los datos
        axios.post(url,datosFormulario,{})
        window.location.reload();

    };

        return(
            <>
            <button onClick={mostrarOcultar}>Crear un nuevo rubro </button>
            {esVisible && (
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre Categoria
                    <input type="text" name="nombreCategoriaProducto" value={datosFormulario.nombreCategoriaProducto} onChange={handleChange} />
                </label>
                <label>
                    Nombre Categoria
                    <input type="text" name="descripcionCategoriaProducto" value={datosFormulario.descripcionCategoriaProducto} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Crear</button>
            </form>)}
            </>
        );

}