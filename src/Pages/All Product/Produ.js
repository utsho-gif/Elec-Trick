import React from "react";
import { useNavigate } from "react-router-dom";

const Produ = ({ produ }) => {
//   const { name, img, description, min_q, avail_q, price, _id } = produ;
  const navigate = useNavigate();
  const handleNavigate = (_id) => {
    navigate(`/makeorder/${_id}`);
  };
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={produ?.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{produ?.name}</h2>
        <p>{produ?.description}</p>
        <p>Least Order Quantity: {produ?.min_q}</p>
        <p>Available Quantity: {produ?.avail_q}</p>
        <p>Price/unit: ${produ?.price}</p>
        <div class="card-actions justify-center mt-6">
          <button onClick={() => handleNavigate(produ?._id)} class="btn btn-primary">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produ;
