import React, {useEffect} from 'react'
import {postUser} from '../api/user';
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';

export default function useRegister(loginCreds, setLoginCreds, setError, setUser) {
//get navigate
    const register = async (cancelToken, loginCreds)=>{
        const response = await postUser(loginCreds.email, loginCreds.password,cancelToken)
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
            register(source.token, loginCreds)
            return ()=>{source.cancel()}
        },
        [loginCreds,  setLoginCreds, setError, setUser]
    )
    
}