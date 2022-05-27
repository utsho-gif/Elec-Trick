import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken.";

const Login = () => {
    const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || gUser);  

  if (token) {
    navigate('/home');
  }
  let signInErro;
  if (error || gError) {
    signInErro = (
      <p className="text-red-500 mb-2">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const loadingEle = (
    <p>
      <Loading></Loading>
    </p>
  );

  const onsubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
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
              {signInErro}
              {loading ? (
                loadingEle
              ) : (
                <input
                  className="btn w-full max-w-xs"
                  type="submit"
                  value="Login"
                />
              )}
            </form>
            <p className="mt-3">
              <small>
                {" "}
                New to Elec-Trick?{" "}
                <Link to="/signup" className="text-primary uppercase">
                  Create an account
                </Link>
              </small>
            </p>
            <div class="divider">OR</div>
            {gLoading ? (
              loadingEle
            ) : (
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline"
              >
                <FcGoogle className="mr-3 text-lg"></FcGoogle> Sign In with
                Google
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
