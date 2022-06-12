import apiClientNoAuth from './clientNoAuth';

const endpoint = '/book';

export const getOneBook= async (id, cancelToken)=>{
    let error;
    let book;

    const response = await apiClientNoAuth( cancelToken).get(endpoint+'/'+id);
    if (response.ok){
        book = response.data
    }else if (response.status === 401){
        error="Invalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        book
    }

}
export default {
    getOneBook
}