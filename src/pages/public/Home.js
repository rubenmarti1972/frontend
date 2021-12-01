import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import slider_1 from "../../assets/slider_1.jpg";
import slider_2 from "../../assets/slider_2.jpg";
import Catalogue from "../../components/Catalogue";
import { ProductProvider } from "../../context/ProductContext";
import { ShopProvider } from "../../context/ShopContext";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_1}
            alt="First slide"
            height="500px"
            width="100vm"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="success" onClick={handleLogin}>
              Sign in
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_2}
            alt="Second slide"
            height="500px"
            width="100vm"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*********************************/}
      <ProductProvider>
        <ShopProvider>
          <Catalogue />
        </ShopProvider>
      </ProductProvider>
    </div>
  );
};

export default Home;
