import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = '5543b52497871853e751056fae446029';
  const onSubmit = (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        if(result.success){
            const img = result.data.url;
            const product = {
                name: data.name,
                description: data.description,
                min_q: data.min_q,
                avail_q: data.avail_q,
                price: data.price,
                img: img
            }
            fetch('https://hidden-reef-48781.herokuapp.com/product', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success("Product added successfully");
                    reset();
                }
                else{
                    toast.error('An error occured')
                }
            })
        }
    })
  };
  return (
    <div className="card ml-14 my-14 p-14 bg-base-100 shadow-xl">
      <h2 className="text-3xl">Add a new product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Min Order Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("min_q", {
              required: {
                value: true,
                message: "Required Field",
              },
              min: {
                value: 0,
                message: "Please input a least quantity",
              },
            })}
          />
          <label className="label">
            {errors.min_q?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.min_q.message}
              </span>
            )}
            {errors.min_q?.type === "min" && (
              <span className="label-text-alt text-red-500">
                {errors.min_q.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Avialable Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("avail_q", {
              required: {
                value: true,
                message: "Required Field",
              },
              min: {
                value: 0,
                message: "Please input available quantity",
              },
            })}
          />
          <label className="label">
            {errors.avail_q?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.avail_q.message}
              </span>
            )}
            {errors.avail_q?.type === "min" && (
              <span className="label-text-alt text-red-500">
                {errors.avail_q.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="text"
            placeholder="Product Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Photo</span>
          </label>
          <input
            type="file"
            className=" w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <input className="btn w-full max-w-xs" type="submit" value="add" />
      </form>
    </div>
  );
};

export default AddProduct;
