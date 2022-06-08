import {create} from "apisauce";

const apiClient = (cancelToken) =>create({
    baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com/user":'',
    cancelToken
})

export default apiClient