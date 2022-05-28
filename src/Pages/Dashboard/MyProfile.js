import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
      const user = {
          email: data.email,
          name: data.name,
          location: data.location,
          phone: data.phone,
          linkedin: data.linkedin  
      }
      fetch(`http://localhost:5000/user/${email}`,{
        method:'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(inserted => {
          console.log(inserted);
        if (inserted?.result?.modifiedCount > 0) {
            toast.success("Updated successfully");
            reset();
          } else {
            toast.error("Nothing to update");
          }
      })
      reset();
  };
  return (
    <div>
      <div className="card ml-14 my-14 p-14 bg-base-100 shadow-xl">
        <h2 className="text-3xl">My Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value= {user?.displayName}
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value= {user?.email}
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
              <span className="label-text">Your Location</span>
            </label>
            <input
              type="location"
              placeholder="Your Location"
              className="input input-bordered w-full max-w-xs"
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is required",
                },
              })}
            />
            <label className="label">
              {errors.location?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.location.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Number</span>
            </label>
            <input
              type="phone"
              placeholder="Your Number"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your LinkedIn</span>
            </label>
            <input
              type="url"
              placeholder="Your LinkedIn"
              className="input input-bordered w-full max-w-xs"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "LinkedIn is required",
                },
              })}
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.linkedin.message}
                </span>
              )}
            </label>
          </div>
          <input className="btn w-full max-w-xs" type="submit" value="add" />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
