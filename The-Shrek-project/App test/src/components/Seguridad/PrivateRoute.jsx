import { Navigate } from 'react-router-dom';
import useIsLoggedIn from '../Hooks/IsLoggedIn';

const PrivateRoute = ({ element}) => {
    const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn){
    return element;
  }
  return (
        <Navigate to="/login" />
  );
};

export default PrivateRoute;