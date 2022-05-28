import React from "react";
import { useForm } from "react-hook-form";
import { RiStarLine } from "react-icons/ri";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const reviews = {
      rating: data.rating,
      review: data.review,
      email: data.email,
      name: data.name,
    };
    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Review added successfully");
          reset();
        } else {
          toast.error("An error occured");
        }
      });
    reset();
  };
  return (
    <div>
      <div class="card w-120 mx-auto my-20 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Add a Review</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Rating </span>
                  <span>
                    <RiStarLine></RiStarLine>
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Put a rating number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("rating", {
                    required: {
                      value: true,
                      message: "Required Field",
                    },
                    max: {
                      value: 5,
                      message: "Max 5",
                    },
                    min: {
                      value: 1,
                      message: "Min 1",
                    },
                  })}
                />
                <label className="label">
                  {errors.rating?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.rating.message}
                    </span>
                  )}
                  {errors.rating?.type === "max" && (
                    <span className="label-text-alt text-red-500">
                      {errors.rating.message}
                    </span>
                  )}
                  {errors.rating?.type === "min" && (
                    <span className="label-text-alt text-red-500">
                      {errors.rating.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <input
                  type="text"
                  placeholder="Review"
                  className="input input-bordered w-full max-w-xs"
                  {...register("review", {
                    required: {
                      value: true,
                      message: "Review is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.review?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.review.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
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
              <input
                className="btn btn-success mt-5"
                type="submit"
                value="confirm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
