import { createContext, useEffect, useState } from "react";
import { apiRegister, apiLogin } from "./Api";
import {useNavigate} from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  //Se ejecuta al crear el componente
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  const handleRegister = (objUser) => {
    //Realizar petición al servidor
    fetch(apiRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUser),
    })
      .then(async (resp) => {
        if (resp.status === 201) {
          let json = await resp.json();
          //Almacenar token en espacio de memoria del navegador
          localStorage.setItem("token", json.token);
          setAuth(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = async (objUser) => {
    let resp = await fetch(apiLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUser),
    });
    if (resp.status === 200) {
      //Obtener datos de la respuesta del servidor
      let json = await resp.json();
      //Almacenar token en el localStorage
      localStorage.setItem("token", json.token);
      setAuth(true);
    }
    return resp;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
    setAuth(false);
  };

  const data = { handleRegister, handleLogin, auth, handleLogout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
