import '../../Resources/css/Login.css'
import ImagenLogin from '../../Resources/Images/Login-Registro.jpg'
import { useState } from 'react';
import { API_BASE_URL } from '../Connections/config';
import axios from 'axios';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
          username,
          password,
        });
  
        // Si la solicitud fue exitosa (código de estado 2xx)
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          // Manejar la respuesta del servidor, por ejemplo, almacenar el token
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('isLoggedIn','true')
          console.log('Token:', data.token);
        } else {
          console.error('Credenciales inválidas');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label>
            Nombre de Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  };
  
  export default Login;