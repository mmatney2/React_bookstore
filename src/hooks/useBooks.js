import React, { useEffect, useState } from "react";
import apiBooks from "../api/apiBooks";
import { CancelToken } from "apisauce";

export default function useBooks() {
  const [books, setBooks] = useState([]);

  const get = async () => {
    const response = await apiBooks.getAllBooks();
   
    setBooks(response);
  };
  useEffect(() => {
    const source = CancelToken.source();
    get();
  }, []);


  return books;
}


