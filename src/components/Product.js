import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import "./Components.css";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <ProductForm />
      <br />
      <div className="contCards">
        {products.map((e) => {
          return (
            <ProductCard className="card" key={e._id} id={e._id} name={e.name} price={e.price} edit={true} />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
