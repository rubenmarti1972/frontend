
import {createContext} from "react";
import { apiProduct } from "./Api";

const ProductContext = createContext();

const ProductProvider = ({children})=>{

    const handleCreate = async (objProduct)=>{
        let resp = await fetch(apiProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objProduct)
        });
        return resp;
    }

    return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;

