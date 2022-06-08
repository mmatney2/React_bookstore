import React, {useEffect} from 'react'
import {putUser} from '../api/apiUser'; 
import { CancelToken } from 'apisauce';

export default function useEdit(loginCreds, setLoginCreds, setError, setUser) {
//get navigate
    const put = async (cancelToken)=>{
        const response = await putUser(loginCreds.email, loginCreds.password,cancelToken)
        console.log(response)
        if(response.user?.token){
            console.log('logged in');
            setUser(response.user);
            setLoginCreds({})
            // navigate to the home page
        }
        setError(response.error);
    }
    
    
    useEffect(
        ()=>{
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password)
            put(source.token)
            return ()=>{source.cancel()}
        },
        [loginCreds,  setLoginCreds, setError, setUser]
    )
    
}