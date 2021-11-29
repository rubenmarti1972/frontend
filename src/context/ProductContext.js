
import {createContext, useState} from "react";
import { apiProduct } from "./Api";

const ProductContext = createContext();

const ProductProvider = ({children})=>{

    //const [products, setProducts] = useState([]);

    const handleCreate = async (objProduct)=>{
        //Obtener token del localStorage
        let token = localStorage.getItem('token');
        //Enviar petición al servidor
        let resp = await fetch(apiProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });
        return resp;
    }

    const data = {handleCreate}

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;

