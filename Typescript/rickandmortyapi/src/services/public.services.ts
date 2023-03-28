import axios from "axios";
import { User } from "../models";
import { loadAbort } from "../utilities";

export const login = () =>{
    const controller = loadAbort();
    return {
        call: axios.get<User>('https://rickandmortyapi.com/api/character/2', { signal: controller.signal}),
        controller
    };  
};