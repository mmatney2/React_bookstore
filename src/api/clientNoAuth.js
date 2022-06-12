import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (cancelToken) =>create({
    // baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com":'',
    baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com":'',
    cancelToken
})

export default apiClient


// const apiClient = (email, password, cancelToken) =>create({
//     baseURL:  "https://cae-bootstore.herokuapp.com",      
//     headers:{
//         contentType: "application/json",
//         Authorization:"Basic "+base64.encode(email+":"+password)
//     },
//     cancelToken
// })

// export default apiClient
// const apiClient = (cancelToken) =>
//   create({
//     baseURL: "https://cae-bootstore.herokuapp.com",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     cancelToken,
//   });

