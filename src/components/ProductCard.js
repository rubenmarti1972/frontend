import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductContext from "../context/ProductContext";
import ShopContext from "../context/ShopContext";
import ProductFormModal from "./ProductFormModal";

const ProductCard = ({ objProduct, edit }) => {

  const {deleteProduct} = useContext(ProductContext);
  const {handleCart} = useContext(ShopContext);

  const [show, setShow] = useState(false);


  const handleEdit = () => {
      setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete= ()=>{
    deleteProduct(objProduct._id);
  }


  return (
    <>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>{objProduct.name}</Card.Title>
          <Card.Text>{objProduct.price}</Card.Text>
          {edit ?
          (
            <>
            <Button variant="warning" onClick={handleEdit}>Edit</Button>
              &nbsp;
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </>
          )
          :
          <Button onClick={()=>handleCart(objProduct)}>Add cart</Button>
        }
          
        </Card.Body>
      </Card>
      {/******Mostrar modal******/}
      <ProductFormModal objProduct={objProduct} show={show} handleClose={handleClose}/>
    </>
  );
};

export default ProductCard;
