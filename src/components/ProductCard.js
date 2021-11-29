import React from "react";
import {Card, Button} from "react-bootstrap";

const ProductCard = ({id, name, price}) => {
  return (
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
