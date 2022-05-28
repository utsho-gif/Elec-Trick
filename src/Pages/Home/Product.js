import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, description, min_q, avail_q, price, _id } = product;
  const navigate = useNavigate();
  const handleNavigate = (_id) => {
    navigate(`/makeorder/${_id}`);
  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Least Order Quantity: {min_q}</p>
        <p>Available Quantity: {avail_q}</p>
        <p>Price/unit: ${price}</p>
        <div class="card-actions justify-center mt-6">
          <button onClick={()=> handleNavigate(_id)} class="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
