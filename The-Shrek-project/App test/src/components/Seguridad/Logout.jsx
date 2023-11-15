import { Navigate } from "react-router-dom";

export const Logout = () => {
    console.log("Antes de localStorage.clear()");
    localStorage.clear();
    console.log("Después de localStorage.clear()");
    window.location.href = "/";
    return <h1 />   
  
};

export default Logout;