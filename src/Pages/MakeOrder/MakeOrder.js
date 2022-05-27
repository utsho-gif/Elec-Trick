import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MakeOrder = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id, isReload]);

  const { name, img, description, min_q, avail_q, price, _id } = item;

  const onSubmit = (data) => {
    const order = data.order;
    if (order >= min_q && order <= avail_q) {
      const orderParse = parseInt(order);
      const newQuantity = avail_q - orderParse;
      fetch(`http://localhost:5000/product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ avail_q: newQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsReload(!isReload);
          reset();
        });
    } else {
      toast.error("Out of requirement");
    }
  };

  return (
    <div class="card mt-14 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Album" />
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="number"
                placeholder= {`MIn order quantit is ${min_q}`}
                className="input input-bordered w-full max-w-xs"
                {...register("order", {
                  required: {
                    value: true,
                    message: "Required Field",
                  },
                  max: {
                    value: `${avail_q}`,
                    message: `Max order have to less than ${avail_q}` 
                  },
                  min: {
                    value: `${min_q}`,
                    message: `Min order have to greater than ${min_q}`
                  }
                })}
              />
              <label className="label">
                {errors.order?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "max" && (
                  <span className="label-text-alt text-red-500">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "min" && (
                  <span className="label-text-alt text-red-500">
                    {errors.order.message}
                  </span>
                )}
              </label>

              <input
                className="btn btn-success mt-5"
                type="submit"
                value="make Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
