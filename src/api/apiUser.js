import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'
import apiClient from './clientBasicAuth';

const endpoint= '/user'

export const post = async (data, cancelToken) => {
    let error;
    let user;

    const response = await apiClientNoAuth(data, cancelToken).post(endpoint, data);

    if (response.ok){
        user = response.data
    }else if (response.status === 422){
        error="This email has already been created"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}
// let token= "BFGYQt6rczpS6bfsqu1GFVZw1aDZzwN4pe2bEXYzyfE"
export const put = async (token, id, data, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, id, data, cancelToken).put(endpoint+'/'+id, data);

    if (response.ok){
        user = response.data
    }else if (response.status === 422){
        error="This email has already been created"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}
export const del = async (token, id, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, id, cancelToken).del(endpoint+'/'+id);

    if (response.ok){
        user = response.data
    }else if (response.status === 422){
        error="This email has already been created"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}
// const apiClient = {
//     del,
//     put,
//     post,
// }
// export default apiClient
