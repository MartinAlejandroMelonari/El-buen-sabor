import { Navigate } from 'react-router-dom';
import useIsLoggedIn from '../Hooks/IsLoggedIn';

const PublicRoute = ({ element}) => {
    const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn){
    <Navigate to="" />
   
  }
  return element;
};

export default PublicRoute;