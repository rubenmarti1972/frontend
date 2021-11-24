import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <Form>
        {/******Fila 1********/}
        <Row>
          {/****** Columna 1 ********/}
          <Col></Col>

          {/****** Columna 2 ********/}
          <Col></Col>
        </Row>

        {/******Fila 2********/}
        <Row>
          {/****** Columna 1 ********/}
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>

          {/****** Columna 2 ********/}
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
