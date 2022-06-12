import { createContext, useEffect, useReducer, useState } from "react";
import { shopReducer, cartActions } from "../reducers/shopReducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const getUserFromLS = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
  };
  const getCartFromLS = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }
  };
  const getBookFromLS = () => {
    let book = localStorage.getItem("book");
    if (book) {
      return JSON.parse(book);
    }
  };
  const [user, _setUser] = useState(getUserFromLS() ?? {});
  const [alert, setAlert] = useState({});
  const [cart, dispatch] = useReducer(shopReducer, getCartFromLS() ?? []);
  const [book, _setBook] = useState(getBookFromLS() ?? {});

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    _setUser(user);
  };
  const setBook = (book) => {
    localStorage.setItem("book", JSON.stringify(book));
    _setBook(book);
  };

  const values = {
    book,
    setBook,
    alert,
    setAlert,
    user,
    setUser,
    cart,
    addToCart:(book)=>{
        dispatch({type: cartActions.addToCart, book})
    },
    addBulkToCart: (book) => {
      dispatch({ type: cartActions.addBulkToCart, book });
    },
    removeFromCart: (book) => {
      dispatch({ type: cartActions.removeFromCart, book });
    },
    removeAllFromCart: (book) => {
      dispatch({ type: cartActions.removeAllFromCart, book });
    },
    emptyCart: () => {
      dispatch({ type: cartActions.emptyCart });
    },
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
