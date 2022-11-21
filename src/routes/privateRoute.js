import { Navigate } from "react-router-dom";

export function PrivateRoute({children}){
    const currentUser = localStorage.getItem("@firebase:user");

    return (!!currentUser) ? children : <Navigate to={"/login"}/>
}