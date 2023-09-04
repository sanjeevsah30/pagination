import React from "react";
import "./style/product.scss";


const ProductItem = ({ productDetail }) => {
  return (
    <div className="product--item">
        <img src={productDetail.images[0]} alt={productDetail.title} />
        <span>{productDetail.title}</span>

      <span>{productDetail.brand}</span>
      <span>{productDetail.category}</span>
      <span>${productDetail.price}</span>
      <span>{productDetail.description}</span>



    </div>
  );
};

export default ProductItem;
