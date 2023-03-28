import { Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { createUserAdapter } from "../../adapters";
import { useFetchAndLoad } from "../../hooks"
import { PrivateRoutes } from "../../models";
import { createUser, modifyUser } from "../../redux/states/user";
import { AppStore } from "../../redux/store";
import { login } from "../../services/public.services";

export const Login = () =>{

    const {loading, callEndpoint} = useFetchAndLoad();
    const dispatch = useDispatch();
    const userState = useSelector((store: AppStore) => store.user);
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        try {
            const morty = await callEndpoint(login());
            dispatch(createUser(createUserAdapter(morty)));
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true} );
            
        } catch (error) {}
    };

    const handleModify = ()=>{
        dispatch(modifyUser({name: 'Yordhis'}));
    };


    return (
        <>
            <h1>Hola</h1>
            { loading ? (
               <h3>Cargando...</h3>
            ):(
            <>
                <Button variant="text" onClick={handleLogin}> Login </Button>
                <Button variant="text" onClick={handleModify}> Modify </Button>
                <div>
                    <h3> {JSON.stringify(userState)} </h3>
                </div>
            </>
            )}
        </>
    );
};

export default Login;