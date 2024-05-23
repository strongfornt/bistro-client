import { useContext } from "react";
import  { AuthContext } from "./AuthProvider";

export default function useProvider() {
    const authContext = useContext(AuthContext)
    return authContext;

}
