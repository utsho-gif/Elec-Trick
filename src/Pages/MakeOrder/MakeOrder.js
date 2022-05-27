import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MakeOrder = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
      fetch(`http://localhost:5000/purchase/${id}`)
      .then(res => res.json())
      .then(data => {
          setItem(data);

      })
  },[id,isReload])

 const {name, img, description, min_q, avail_q, price, _id} = item;

  const hendleOrder = event => {
    event.preventDefault();
    const order = event.target.order.value;
    if(order >= min_q && order <= avail_q){
        const orderParse = parseInt(order);
        const newQuantity = avail_q - orderParse;
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({avail_q: newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsReload(!isReload);
            event.target.reset()
        })
    }
    else{
        console.log('not req');
    }
  }
  
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
        <div className="mt-6">
            <form onSubmit={hendleOrder}>
            <input type="number" name="order" placeholder={'Least Quantity '+ min_q} min={min_q} max={avail_q} class="input input-bordered input-success w-full max-w-xs" /> <br />
            <input className="btn btn-success mt-5" type="submit" value="make Order" />
            </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
