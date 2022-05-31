import apiClient from './clientNoAuth';

const endpoint = '/user';

export const postUser= async (data, cancelToken)=>{
    let error;
    let user;

    const response = await apiClient(cancelToken).post(endpoint, data);
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
