import apiClientNoAuth from './clientNoAuth';
import apiClientTokenAuth from './clientTokenAuth';
import axios from "axios";

export const createUser= async  ()=>{
    const body = {
        "email" : "mar@mat.com",
        "first_name" : "mar",
        "last_name" : "mat",
        "password" : "123"
    }
    const response = await axios.post("https://cae-bootstore.herokuapp.com/user",body)
    return response
}
