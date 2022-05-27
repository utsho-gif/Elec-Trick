import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MakeOrder = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
      fetch(`http://localhost:5000/purchase/${id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setItem(data);
      })
  },[])
//   const { data: good, isLoading } = useQuery("goods", () =>
//     fetch(`http://localhost:5000/purchase/{id}`).then((res) => res.json())
//   );
 const {name, img, description, min_q, avail_q, price, _id} = item;
//   const {img} = good;
  
  return (
    <div class="card mt-14 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div>
        <p>Product ID: {_id}</p>
        <p>{description}</p>
        <p>Available Quantity: {avail_q}</p>
        <p>Least Quantity: {min_q}</p>
        <p>Price(per unit): {price}</p>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
