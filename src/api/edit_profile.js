import apiClient from './clientBasicAuth';

const endpoint = '/api/edit_profile';

export const putUser= async (email, password, confirm_password, cancelToken)=>{
    let error;
    let user;

    const response = await apiClient(email, password, confirm_password, cancelToken).put(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="registerInvalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}

