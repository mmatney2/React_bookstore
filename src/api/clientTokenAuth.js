import {create} from "apisauce";
import base64 from "base-64";

// const token = "BFGYQt6rczpS6bfsqu1GFVZw1aDZzwN4pe2bEXYzyfE"
// const apiClient = (token,cancelToken) =>create({
    
//     baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com/user":'',
//     headers:{
//         Authorization:"Bearer "+ token
//     },
//     cancelToken
// })

// export default apiClient


// const apiClient = (token,cancelToken) =>create({
//     baseURL: "https://cae-bootstore.herokuapp.com",
//     headers:{
//         Authorization:"Bearer "+token
//     },
//     cancelToken
// })

// export default apiClient
const token = "BFGYQt6rczpS6bfsqu1GFVZw1aDZzwN4pe2bEXYzyfE"
const apiClient = (token,cancelToken) =>create({
    
    baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com":'',
    headers:{
        Authorization:"Bearer "+ token
    },
    cancelToken
})

export default apiClient