import React, {useContext} from 'react'
import ProductContext from '../context/ProductContext';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const Product = () => {

    const {products} = useContext(ProductContext);

    return (
        <div>
            <ProductForm/>
            <br/>
            {products.map(e=><ProductCard key={e._id} id={e._id} name={e.name} price={e.price}/>)}
            
        </div>
    )
}

export default Product;
