import React, {useEffect} from 'react'
import {delUser} from '../api/apiUser'; //missing
import { CancelToken } from 'apisauce';

export default function useDelete(loginCreds, setLoginCreds, setError, deleteUser) {
//get navigate
    const del = async (cancelToken)=>{
        const response = await delUser(loginCreds.email, loginCreds.password,cancelToken)
        console.log(response)
        if(response.user?.token){
            console.log('logged in');
            deleteUser(response.user);
            setLoginCreds({})
            // navigate to the home page
        }
        setError(response.error);
    }
    
    
    useEffect(
        ()=>{
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password)
            del(source.token)
            return ()=>{source.cancel()}
        },
        [loginCreds,  setLoginCreds, setError, deleteUser]
    )
    
}