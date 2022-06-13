import React, { useEffect, useState } from "react";
import apiBook from "../api/apiBook";
import { CancelToken } from "apisauce";

export default function useBook() {
  const [book, setBook] = useState([]);

  const get = async () => {
    const response = await apiBook.getOneBook();
   
    setBook(response);
  };
  useEffect(() => {
    const source = CancelToken.source();
    get();
  }, []);


  return book;
}


