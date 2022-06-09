import React, {useEffect, useContext} from 'react'
import {getUser} from '../api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';

export default function useLogin(loginCreds, setLoginCreds, setError) {
//get navigate
    const {setUser} = useContext(AppContext)
    const login = async (cancelToken, loginCreds)=>{
        const response = await getUser(loginCreds.email, loginCreds.password,cancelToken)
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
            login(source.token, loginCreds)
            return ()=>{source.cancel()}
        },
        [loginCreds,  setLoginCreds, setError, setUser]
    )
    
}