import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models";
import { deleteUser } from "../../redux/states/user";

export const Logout = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(deleteUser())
        navigate(PublicRoutes.LOGIN, { replace: true});
    };

    return (<>
        <button onClick={logOut}> Log Out </button>
    </>)
}