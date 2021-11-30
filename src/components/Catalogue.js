import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";
import "./Components.css"

const Catalogue = () => {
  const { catalogue } = useContext(ProductContext);

  return (
    <div>
      <h2>Catalogue</h2>
      <div className="contCards">
        {catalogue.map((e) => (
          <ProductCard
            key={e._id}
            id={e._id}
            name={e.name}
            price={e.price}
            edit={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
