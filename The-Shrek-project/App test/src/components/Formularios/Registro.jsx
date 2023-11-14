import '../../Resources/css/Login.css'
import ImagenLogin from '../../Resources/Images/Login-Registro.jpg'
import { useState } from 'react';
import { API_BASE_URL } from '../Connections/config';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Registro = () => {
    const navigate = useNavigate();
    const [datosFormulario, setDatosFormulario] = useState({
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        email:''
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setDatosFormulario({...datosFormulario,[name]:value})
    }
    const handleRegistro = async (e) => {
        e.preventDefault();
        console.log(datosFormulario)
        const datosCompletos = Object.values(datosFormulario).every((campo) => (campo !== ''));
        if(datosCompletos){
        try {  
        const response = await axios.post(`${API_BASE_URL}/auth/register`,datosFormulario);
        // Si la solicitud fue exitosa (código de estado 2xx)
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          // Manejar la respuesta del servidor, por ejemplo, almacenar el token
          console.log('Token:', data.token);
          window.localStorage.setItem('token', data.token);     
          window.localStorage.setItem('isLoggedIn','true')
          navigate('/Productos')
          // Redireccionar al usuario a otra página
          // history.push('/dashboard');
        } else {
          console.error('Credenciales inválidas');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }}else{
        console.log("Complete todos los campos")
      }
    };
  
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleRegistro}>
          <label>
            Nombre:
            <input type="text" name="firstname" value={datosFormulario.firstname} onChange={handleChange} />
          </label>
          <br />
          <label>
            Apellido:
            <input type="text" name="lastname" value={datosFormulario.lastname} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email"value={datosFormulario.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Username:
            <input type="text" name="username"value={datosFormulario.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" name="password" value={datosFormulario.password} onChange={handleChange} />
          </label>
          <br />
          <label>
            Repetir Contraseña:
            <input type="password" name="" value={datosFormulario.password2} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  };
  
  export default Registro;