import React, {useContext} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../logo.svg";

const Dashboard = () => {

  const {handleLogout} = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Web 53857
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/catalogue" href="#catalogue">Catalogue</Nav.Link>
              <Nav.Link  href="" onClick={handleLogout}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      {/********Aquí se cargarán los componentes hijos referenciados en las rutas**** */}
      <Outlet />
    </>
  );
};

export default Dashboard;
