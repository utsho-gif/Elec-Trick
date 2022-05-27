import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken.";
import Loading from "../Shared/Loading";

const SignUp = () => {
    const navigate = useNavigate();
  const [confError, setConfError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user);  

  if (token) {
    navigate('/home');
  }
  const loadingEle = (
    <p>
      <Loading></Loading>
    </p>
  );
  let signupError;
  if (error || confError) {
    signupError = (
      <p className="text-red-500 mb-2">
        <small>{error?.message || confError}</small>
      </p>
    );
  }
  const onsubmit = async (data) => {
    const pass = data.password;
    const cofPass = data.confPassword;
    if (pass === cofPass) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
    } else {
      setConfError("Password doesn't match");
    }
  };

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Sign Up now!</h1>
          <p class="py-6 lg:mr-14">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
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
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 charectar or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("confPassword", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 charectar or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.confPassword?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.confPassword.message}
                    </span>
                  )}
                  {errors.confPassword?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.confPassword.message}
                    </span>
                  )}
                </label>
              </div>
              {signupError}
              {loading ? (
                loadingEle
              ) : (
                <input
                  className="btn w-full max-w-xs"
                  type="submit"
                  value="Sign Up"
                />
              )}
            </form>
            <p className="mt-3">
              <small>
                {" "}
                Already have an account?{" "}
                <Link to="/login" className="text-primary uppercase">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
