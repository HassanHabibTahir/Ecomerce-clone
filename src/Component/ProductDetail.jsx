import React from "react";
import { useParams } from "react-router-dom";
import ProductBuydata from "./ProductBuydata";

export default function ProductDetail() {
  const { productId } = useParams();
  const data = ProductBuydata;
  const product = data.find((item) => item.id === productId);
  console.log(product);

  return (
    <>
      <div>
        {/* <img src={product.img} alt="images" width="100%" /> */}
        {/* <h1>{product.title}</h1>
        <h1>{product.price}</h1>
        <h1>{product.stock}</h1> */}
      </div>
    </>
  );
}
