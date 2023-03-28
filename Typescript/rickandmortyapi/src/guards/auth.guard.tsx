import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { AppStore } from "../redux/store";

export const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => store.user);
    console.log(userState)
    
    return userState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}

export default AuthGuard;