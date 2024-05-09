/* eslint-disable react/no-unescaped-entities */
import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle, signInWithGithub, setLoading } =
    useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const location = useLocation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (formData) => {
    const { email, password } = formData;

    signIn(email, password)
      .then(() => {
        toast.success("Sign In Successful");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLoading(false);
        if (err.message === "Firebase: Error (auth/invalid-credential).") {
          toast.error("Invalid Email Or Password");
        } else {
          toast.error("An Unknown Error Occurred");
        }
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Sign In Successful");
        // navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setLoading(false);
        toast.error("An Unknown Error Occurred!");
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Sign In Successful");
        // navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setLoading(false);
        toast.error("An Unknown Error Occurred!");
      });
  };

  return (
    <div className="mb-5 lg:mb-10 lg:bg-base-200 rounded-xl ">
      <Helmet>
        <title>Sign In | Royal Explore</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-jost font-bold text-center pt-5 lg:pt-10 text-btn-1">
        Login Now !
      </h1>
      <div className="hero px-2 py-5 lg:py-10 ">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 border">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is a Required Field!",
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Enter password to proceed!",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
              />
              <span
                onClick={handleShowPassword}
                className="text-2xl absolute right-4 top-[61%]"
              >
                {showPassword ? (
                  <IoIosEye></IoIosEye>
                ) : (
                  <IoIosEyeOff></IoIosEyeOff>
                )}
              </span>
            </div>
            <div>
              {errors.password && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.password.message}
                </p>
              )}
            </div>
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-[16px]"
              >
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-primary-1 hover:bg-primary-1 text-lg text-white hover:bg-btn-1">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-4 justify-center  items-center mb-5">
            {" "}
            <GoogleButton onClick={handleGoogleLogin} />
            <GithubButton onClick={handleGithubLogin} />
          </div>
          <p className="text-center mb-4 text-lg">
            Don't have any account?{" "}
            <Link to="/register" className="link text-secondary-1 pb-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
