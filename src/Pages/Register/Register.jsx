import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../CustomHooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateRegisterProfile, setReload, reload, setLoading } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (formData) => {
    const { email, fullName, password, photoUrl } = formData;

    createUser(email, password)
      .then(() => {
        updateRegisterProfile(fullName, photoUrl)
          .then(() => {
            setReload(!reload);
          })
          .catch((err) => console.log(err));

        toast.success("Registration Successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLoading(false);
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email Already In Use");
        } else {
          toast.error("An Unknown Error Occurred!");
        }
      });
  };

  return (
    <div className="mb-5 lg:mb-10 bg-base-300 rounded-xl bg-[url('https://i.ibb.co/XFwZHc4/brandi-redd-a-JTi-W00qqt-I-unsplash-2.jpg')] bg-cover bg-center bg-blend-overlay">
      <Helmet>
        <title>Sign Up | ECO Volunteers</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-jost font-bold text-center pt-5 lg:pt-10 text-btn-1 font-poppins">
        REGISTER
      </h1>
      <div className="hero flex justify-center flex-wrap px-2 py-5 lg:py-10 ">
        <div className="card shrink-0 w-full max-w-md md:border ">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Name is a Required Field!",
                  },
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.fullName && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is a required Field!",
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input
                {...register("photoUrl", {
                  required: {
                    value: true,
                    message: "PhotoURL is a required Field",
                  },
                })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.photoUrl && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.photoUrl.message}
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
                  minLength: {
                    value: 6,
                    message: "Password Must be equal 6 Character or longer",
                  },
                  maxLength: {
                    value: 32,
                    message: "Password Cannot be longer than 32 characters",
                  },
                  validate: {
                    isLower: (value) => {
                      if (/[a-z]/.test(value)) {
                        return true;
                      }
                      return "Password Must Contain At Least One Lowercase Character";
                    },
                    isUpper: (value) => {
                      if (/[A-Z]/.test(value)) {
                        return true;
                      }
                      return "Password Must Contain At Least One UpperCase Character";
                    },
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
            <div className="form-control mt-6">
              <button className="btn  bg-primary-1 hover:bg-primary-1  text-lg text-white ">
                Register
              </button>
            </div>
          </form>
          <p className="text-center pb-5 text-lg">
            Already have an account? Please{" "}
            <Link to="/login" className="link text-secondary-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
