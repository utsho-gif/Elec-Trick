import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import BookingModal from "./BookingModal";

const MakeOrder = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    fetch(`https://hidden-reef-48781.herokuapp.com/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id, isReload]);

  const { name, img, description, min_q, avail_q, price, _id } = item;

  return (
    <div class=" card mt-14 lg:card-side bg-base-100 shadow-xl my-10">
      <figure>
        <img className="w-90" src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div>
          <p>Product ID: {_id}</p>
          <p>{description}</p>
          <p>Available Quantity: {avail_q}</p>
          <p>Least Quantity: {min_q}</p>
          <p>Price/unit : ${price}</p>
          <div>
            <label for="my-modal-6" class="btn btn-success mt-6">
              Make Order
            </label>
          </div>
          <BookingModal item={item} user={user}></BookingModal>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
