import React, { useContext, useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import ProductContext from "../context/ProductContext";

const objForm = {
    name: "",
    price: ""
}
const ProductForm = () => {
  //Contexto
    const {handleCreate} = useContext(ProductContext);
    //Estado
    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false);

    const handleForm = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let resp = await handleCreate(form);
        if(resp.status === 201){
          setShow(true);
          setTimeout(()=>setShow(false), 3000);
        }
    }

  return (
    <div>
      <h4>Create</h4>
      <Alert variant="success" show={show}>
        Created product
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product name</Form.Label>
              <Form.Control value={form.name} onChange={handleForm} name="name" type="text" placeholder="Enter product name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Product price</Form.Label>
              <Form.Control value={form.price} onChange={handleForm} name="price" type="number" placeholder="Enter product price" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">Create</Button>
      </Form>
    </div>
  );
};

export default ProductForm;
