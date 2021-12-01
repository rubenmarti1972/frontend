import React, { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";
import "./Components.css";
import {Button} from "react-bootstrap";
import CartModal from "./CartModal";
import ShopContext from "../context/ShopContext";

const Catalogue = () => {
  const { catalogue } = useContext(ProductContext);
  const {cart} = useContext(ShopContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h2>Catalogue</h2>
      <Button onClick={handleShow}>Cart</Button>
      <div className="contCards">
        {catalogue.map((e) => (
          <ProductCard
            key={e._id}
            objProduct={e}
            edit={false}
          />
        ))}
      </div>
      <CartModal show={show} handleClose={handleClose} cart={cart}/>
    </div>
  );
};

export default Catalogue;
