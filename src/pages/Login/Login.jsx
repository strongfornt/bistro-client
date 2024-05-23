import { useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useProvider from "../../ContextProvider/useProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

export default function Login() {
  const {signIn} = useProvider()
    
    const [isDisable,setIsDisable] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()
   
    const from = location?.state || "/"
    console.log(from);
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from)
    })

  };

  const handleValidateCaptcha = (e) => {
        
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setIsDisable(false);
        }else{
            setIsDisable(true)
        }
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                 
                  placeholder="write the captcha"
                  className="input input-bordered"
                  name="captcha"
                  
                />
                <button  className="btn btn-outline mt-2 btn-xs" >validate</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={false} type="submit" className="btn btn-primary">
                  Login
                </button>
               
              </div>
            </form>
            <SocialLogin/>
            <p><small>New Here?</small><Link to='/signUp' >Create An Account</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
}
