import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider=({children})=>{

    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }
    const [user, _setUser] = useState(getUserFromLS())


    const setUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }

    const values = {
        user,
        setUser
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


















// import {createContext, useState} from "react";
// // import LoginForm from './forms/LoginForm';

// export const AppContext = createContext({
//     currentGrid: '',
//     setGrid: null
// });

// const DisplayAllBooksGrid1 = ({children})=>{
//     const currentGrid = localStorage.getItem('appBook') || ''
//     const [bookTitle, _setBookTitle] = useState(currentGrid)
//     const grid = getGrid(bookTitle)

//     const setBookTitle = (title)=>{
//         localStorage.setItem('appBook', title)
//         _setBookTitle(title)
//     }

//     const values = {
//         currentGrid: bookTitle,
//         setGrid: setBookTitle
//     }

//     return{
//         <AppContext.Provider value={values}>
//             {children}
//         </AppContext.Provider>
//     }

// }

// export default DisplayAllBooksGrid1



