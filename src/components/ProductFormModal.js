import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ProductFormModal = ({ show, handleClose }) => {

    const [form, setForm] = useState({name: "", price: ""});

    const handleForm = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Update product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*****Formulario de actualización */}
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  required
                  value={form.name}
                  onChange={handleForm}
                  name="name"
                  type="text"
                  placeholder="Enter product name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label>Product price</Form.Label>
                <Form.Control
                  required
                  value={form.price}
                  onChange={handleForm}
                  name="price"
                  type="number"
                  placeholder="Enter product price"
                />
              </Form.Group>
            </Col>
          </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductFormModal;
