import axios from "axios";

const endpoint = '/api/book/<int:id>';

export const getAllBooks= async ()=>{
    const books = await axios.get("https://cae-bootstore.herokuapp.com/book")
    return books
}

export const getOneBook = async (id)=>{
    const book = await axios.get(`https://cae-bootstore.herokuapp.com/book/${id}`)
    return book
}