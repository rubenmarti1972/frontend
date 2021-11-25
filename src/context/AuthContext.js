import {createContext} from "react";
import { apiRegister, apiLogin } from "./Api";

const AuthContext = createContext();

const AuthProvider = ({children})=>{

    const handleRegister = (objUser)=>{
        //Realizar petición al servidor
        fetch(apiRegister, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        }).then(async (resp)=>{
            if(resp.status === 201){
                let json = await resp.json();
                //Almacenar token en espacio de memoria del navegador
                localStorage.setItem('token', json.token);
            }
        }).catch(error=>{
            console.log(error);
        });
    }

    const handleLogin = async (objUser)=>{
        let resp = await fetch(apiLogin, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        return resp;
    }

    const data={handleRegister, handleLogin};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;