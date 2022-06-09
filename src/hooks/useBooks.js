import React, {useEffect, useState} from 'react'
import apiBooks from '../api/apiBooks';
import { CancelToken } from 'apisauce';






export default function useBooks() {
    const [books, setBooks]=useState([])
    

    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getBooks1=async()=>{
                const response = await apiBooks.get(source.token)
                setBooks(response)
            }
            getBooks1()
            return ()=>{source.cancel();}
        },
        []
        
    )
    return books
    // const get = async ()=>{
    //     const response = await getBook()
    //     console.log(response) 
    // }
    // useEffect(
    //     ()=>{
    //         const source = CancelToken.source()
    //         get();
    //     },
    //     []
    // )
}
