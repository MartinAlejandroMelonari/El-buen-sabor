import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const RolByToken = () => {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    
  // Lógica de verificación del token (puedes adaptarla según tus necesidades)
  const isValidToken = token && tuLogicaDeValidacion(token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isValidToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RolByToken;