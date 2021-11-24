import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {

    const objForm = {
        name: "",
        lastname: "",
        email: "",
        password: ""
    };
    const [form, setForm] = useState(objForm);

    const handleForm = (e)=>{

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/******Fila 1********/}
        <Row>
          {/****** Columna 1 ********/}
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control value={form.name} onChange={handleForm} name="name" type="text" placeholder="Enter name" />
            </Form.Group>
          </Col>

          {/****** Columna 2 ********/}
          <Col>
          <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control value={form.lastname} onChange={handleForm} name="lastname "type="text" placeholder="Enter lastname" />
            </Form.Group>
          </Col>
        </Row>

        {/******Fila 2********/}
        <Row>
          {/****** Columna 1 ********/}
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={form.email} onChange={handleForm} name="email" type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>

          {/****** Columna 2 ********/}
          <Col>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
