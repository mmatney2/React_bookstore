import {create} from "apisauce";

const apiClient = (token,cancelToken) =>create({
    baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com/user":'',
    headers:{
        Authorization:"Bearer "+token
    },
    cancelToken
})

export default apiClient