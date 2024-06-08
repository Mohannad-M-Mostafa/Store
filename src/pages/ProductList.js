import React from "react";
import productList from "./ProductList.json";

const ProductList = () => {
  return (
    <div>
      <h2>All Products In My List</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.company} -{" "} {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
