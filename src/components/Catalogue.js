import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import ProductCard from './ProductCard';

const Catalogue = () => {

    const {catalogue} = useContext(ProductContext);

    return (
        <div>
            <h2>Catalogue</h2>
            {catalogue.map(e=><ProductCard key={e._id} id={e._id} name={e.name} price={e.price}/>)}
        </div>
    )
}

export default Catalogue
