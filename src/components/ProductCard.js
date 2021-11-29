import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductFormModal from "./ProductFormModal";

const ProductCard = ({ id, name, price, handleDelete }) => {
  const [show, setShow] = useState(false);

  const handleEdit = () => {
      setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };


  return (
    <>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="warning" onClick={handleEdit}>Edit</Button>
          &nbsp;
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
      {/******Mostrar modal******/}
      <ProductFormModal show={show} handleClose={handleClose}/>
    </>
  );
};

export default ProductCard;
