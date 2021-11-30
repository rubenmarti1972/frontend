
import {createContext, useEffect, useState} from "react";
import { apiProduct, apiPublicProducts } from "./Api";

const ProductContext = createContext();

const ProductProvider = ({children})=>{

    const [products, setProducts] = useState([]);
    const[catalogue, setCatalogue] = useState([]);

    useEffect(()=>{
        getProducts();
        //getAllProducts();
    }, []);

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

        if(resp.status === 201){
            getProducts();
        }
        return resp;
    }

    const getProducts = async ()=>{
        //Obtener token del localStorage
        let token = localStorage.getItem('token');
        //Enviar petición
        let resp = await fetch(apiProduct, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if(resp.status === 200){
            let json = await resp.json();
            setProducts(json);
        }

        return resp;
    }

    const setProduct = async (objProduct)=>{
        let token = localStorage.getItem('token');
        let resp = await fetch(apiProduct, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        if(resp.status === 200){
            getProducts();
        }

        return resp.status;
    }

    const deleteProduct = async (id)=>{
        //Obtener token
        let token = localStorage.getItem('token');
        //Realizar la petición
        let resp = await fetch(apiProduct, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({id: id})
        });

        if(resp.status === 200){
            getProducts();
        }

        return resp.status;
    }

    const getAllProducts = async()=>{
        let resp = await fetch(apiPublicProducts, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        if(resp.status === 200){
            let json = await resp.json();
            setCatalogue(json);
        }

        return resp.status;
    }

    const data = {handleCreate, products, setProduct, deleteProduct, catalogue, getAllProducts}

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;

