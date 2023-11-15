import '../../Resources/css/Login.css';
import ImagenLogin from '../../Resources/Images/Login-Registro.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Connections/axiosConfig';


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
        const response = await axiosInstance.post(`/auth/register`,datosFormulario);
        // Si la solicitud fue exitosa (código de estado 2xx)
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          // Manejar la respuesta del servidor, por ejemplo, almacenar el token
          console.log('Token:', data.token);
          console.log('Id:', data.id);
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('Id', data.id);     
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

      <div className='container'>
        <h2>Crear cuenta</h2>

        <form onSubmit={handleRegistro}>
        <img src="src/Resources/Images/Login-Registro.jpg" alt="" />
        <br />
          <label>
            Nombre:
            <input placeholder="Ingresar Nombre" type="text" name="firstname" value={datosFormulario.firstname} onChange={handleChange} />
          </label>
          <br />
          <label>
            Apellido:
            <input placeholder="Ingresar Apellido" type="text" name="lastname" value={datosFormulario.lastname} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input placeholder="Ingresar email" type="text" name="email"value={datosFormulario.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Username:
            <input placeholder="Ingresar Usuario" type="text" name="username"value={datosFormulario.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input placeholder="Ingresar contraseña" type="password" name="password" value={datosFormulario.password} onChange={handleChange} />
          </label>
          <br />
          <label>
            Repetir Contraseña:
            <input placeholder="Repita contaseña" type="password" name="" value={datosFormulario.password2} onChange={handleChange} />
          </label>
          <br />

          <button type="submit">Iniciar Sesión</button>
          <button type="submit">Cancelar</button>
          <br />
          <a href="">Crear cuenta con google <img className= "google" src="src/Resources/Images/google.jpeg" alt="" /></a>
        </form>
      </div>
    );
  };
  
  export default Registro;