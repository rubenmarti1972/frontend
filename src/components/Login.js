import React, { useContext, useState } from "react";
import {Form, Button, Alert} from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import "./Components.css";

const objForm = {
  email: "",
  password: ""
}

const Login = () => {
  //Contextos
  const {handleLogin} = useContext(AuthContext);
  //Estados
  const [form, setForm] = useState(objForm);
  const [show, setShow] = useState(false);

  const handleForm = (e)=>{
    let obj = {...form, [e.target.name]: e.target.value};
    setForm(obj);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let resp = await handleLogin(form);
    if(resp.status === 200){
      //Obtener datos de la respuesta del servidor
      let json = await resp.json();
      //Almacenar token en el localStorage
      localStorage.setItem('token', json.token);
      alert("AUTENTICADO!!!!");
      setForm(objForm);
    }else{
     setShow(true);
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <Alert variant="danger" show={show}>
        Invalid Credentials
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
    </div>
  );
};

export default Login;
