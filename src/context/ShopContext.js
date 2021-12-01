import { createContext, useState } from "react";


const ShopContext = createContext();

const ShopProvider = ({children})=>{

    const [cart, setCart] = useState([]);

    const handleCart = (product)=> setCart([...cart, product]); 

    const data = {cart, handleCart};

    return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>
}

export {ShopProvider};
export default ShopContext;