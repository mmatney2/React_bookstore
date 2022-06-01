import apiClient from './clientNoAuth';

const endpoint = '/api/book';

export const getAllBooks= async (data, cancelToken)=>{
    let error;
    let books;

    const response = await apiClient(data, cancelToken).get(endpoint);
    if (response.ok){
        books = response.data
    }else if (response.status === 401){
        error="Invalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        books
    }

}

