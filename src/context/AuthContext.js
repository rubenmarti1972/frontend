import {createContext} from "react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{

    const handleRegister = (objUser)=>{
        //Realizar petición al servidor
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        }).then(async (resp)=>{
            if(resp.status === 201){
                let json = await resp.json();
                console.table(json);
            }
        }).catch(error=>{
            console.log(error);
        });
    }

    const data={handleRegister};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;