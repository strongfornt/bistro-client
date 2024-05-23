import { FaGoogle } from "react-icons/fa";
import useProvider from "../../ContextProvider/useProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



export default function SocialLogin() {
    const {googleSignIn } = useProvider()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            console.log(res);
            const userInfo = {
                email:res.user?.email,
                name:res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
  return (
    <>
        <div>
            <button 
                onClick={handleGoogleSignIn}
            className="btn my-2" > 
                <FaGoogle/> login with google
            </button>
        </div>
    </>
  )
}
