import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const Catalogue = () => {

    const {catalogue} = useContext(ProductContext);

    return (
        <div>
            <h2>Catalogue</h2>
            <p>
               *LISTAR LOS PRODUCTOS SIN MOSTRAR EL BOTÓN 'EDIT' 'DELETE'
            </p>
        </div>
    )
}

export default Catalogue
