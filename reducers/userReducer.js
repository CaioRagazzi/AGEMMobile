import { LOGIN_SUCESS, LOGIN_FORBIDEN } from "../actions/types";

const initialState = {
    login: '',
    token: '',
    email: '',
    isAuthenticated: false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_SUCESS:
            return {
                ...state,
                login: action.payload.user.cpf,
                token: action.payload.token,
                email: action.payload.user.email,
                isAuthenticated: true
            }
        case LOGIN_FORBIDEN:
            return {
                ...state,
                login: '',
                token: '',
                email: '',
                isAuthenticated: false
            }
        default:
            return state;
    }
}