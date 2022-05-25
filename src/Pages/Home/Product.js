import React from "react";

const Product = ({product}) => {
    const {name, img, description, min_q, avail_q, price} = product;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Least Order Quantity: {min_q}</p>
        <p>Available Quantity: {avail_q}</p>
        <p>Price(Per Unit): {price}</p>
        <div class="card-actions justify-center mt-6">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
