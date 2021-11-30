import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductContext from "../context/ProductContext";
import ProductFormModal from "./ProductFormModal";

const ProductCard = ({ id, name, price, edit }) => {

  const {deleteProduct} = useContext(ProductContext);

  const [show, setShow] = useState(false);


  const handleEdit = () => {
      setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete= ()=>{
    deleteProduct(id);
  }


  return (
    <>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {edit &&
          (
            <>
            <Button variant="warning" onClick={handleEdit}>Edit</Button>
              &nbsp;
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </>
          )
        }
          
        </Card.Body>
      </Card>
      {/******Mostrar modal******/}
      <ProductFormModal id={id} name={name} price={price} show={show} handleClose={handleClose}/>
    </>
  );
};

export default ProductCard;
