import { Navigate, useLocation } from "react-router-dom";
import useProvider from "../ContextProvider/useProvider"


export default function PrivateRoutes({children}) {
    const {user,loading} = useProvider()
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace={true} />
}
