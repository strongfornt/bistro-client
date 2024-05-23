import { useQuery } from "@tanstack/react-query";
import useProvider from "../ContextProvider/useProvider";
import useAxiosSecure from "./useAxiosSecure";


export default function useAdmin() {

    const {user} = useProvider()
    const axiosSecure = useAxiosSecure();
  const {data:isAdmin,isPending:isAdminLoading} = useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async () =>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log(res.data);
        return res.data?.admin
        
    }
  })
  return {isAdmin,isAdminLoading}
}
