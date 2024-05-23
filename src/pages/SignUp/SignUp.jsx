import { useForm } from "react-hook-form";
import useProvider from "../../ContextProvider/useProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

export default function SignUp() {
  const { createUser, updateUserProfile } = useProvider();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const signUpUser = result.user;
      console.log(signUpUser);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          const userInfo = {
            name: data?.name,
            email: data?.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
                console.log('user added to the db');
              reset();
              toast.success("sign up successfully");
              navigate('/')
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-800">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="photo Url"
                  {...register("photo", { required: true })}
                  name="photo"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-800">Photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-800">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                  })}
                  name="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-800">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-800">
                    Password must be six character long
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-800">
                    Password must be less thant 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-800">
                    Password must have one uppercase and one lower case latter
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <SocialLogin/>
            <p>
              <small>Already have an account?</small>
              <Link to="/logIn">
                <small>Sign In</small>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
