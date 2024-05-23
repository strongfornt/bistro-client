import { Navigate, useLocation } from "react-router-dom";
import useProvider from "../ContextProvider/useProvider";
import useAdmin from "../hooks/useAdmin"


export default function AdminRoute({children}) {
    const {user,loading} = useProvider()
    const {isAdmin,isAdminLoading} = useAdmin();
    const location = useLocation()
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin ){
        return children;
    }
    return <Navigate  to='/login' state={location.pathname} replace={true} />
}
