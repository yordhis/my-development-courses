import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";
import { persistLocalStorage, removeLocalStorage } from "../../utilities/localStorage.utility";

// Esta contante es el estado inicializado en vacio con el modelo User
export const UserEmptyState: User = {
    id: '',
    name: '',
    gender: '',
    status: ''
};

export const UserKey = 'user';

/**
 * El userSlice: Es donde se manipulara el estado con redux
 * @method createSlice: es de la libreria redux
 * y nos permite crear un objeto con el nombre de el slice, inicializar el estado y 
 * ejecutar acciones de crear, modificar y eliminar elementos del estado en tiempo real
 */
export const userSlice = createSlice({
    name:'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : UserEmptyState,
    /**
     * En el atributo <reducers> contendrá las acciones que modificaran el estado de los 
     * usuarios
     */
    reducers: {
        /**
         * 
         * @param state : este parametro contiene la informacion del estado actual
         * @param action : contiene un metodo payload donde viene informacion que ingreso 
         * el usuario
         * @returns las acciones
         */
        createUser: (state, action) => {
            persistLocalStorage<User>(UserKey,  action.payload);
            return action.payload;
        },
        modifyUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorage<User>(UserKey, result);
            return result;
        },
        deleteUser: () => {
            removeLocalStorage(UserKey);
            return UserEmptyState;
        }
    }
});

/** Se exporta las acciones de manera separada */
export const { createUser, modifyUser, deleteUser } = userSlice.actions;

/** Se exporta por defaul el userSlice.reducer  */
export default userSlice.reducer;
