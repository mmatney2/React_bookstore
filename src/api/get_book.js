import apiClient from './clientBasicAuth';

const endpoint = '/api/get_book';

export const getBook= async (email, password, confirm_password, cancelToken)=>{
    let error;
    let user;

    const response = await apiClient(email, password, confirm_password, cancelToken).get(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="Invalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}

