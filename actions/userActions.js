import { LOGIN_SUCESS, LOGIN_FORBIDEN } from "./types";
import axios from 'axios';

export const userLogin = (user) => dispatch => {
    console.log('action');

    axios.post('https://jithub.firebaseapp.com/api/user/login',
        {
            cpf: user.login,
            password: user.password
        }
    )
        .then(response => {
            if (response.status == 200) {
                dispatch({
                    type: LOGIN_SUCESS,
                    payload: response.data
                })
            }
            else if (response.status == 403) {
                dispatch({
                    type: LOGIN_FORBIDEN
                })
            }
        })
        .catch(err => console.log(err))
}