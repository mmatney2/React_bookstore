import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import primaryTheme from './themes/primaryTheme';
import AppContextProvider from './context/AppContext';
import ListOfBooksInStore from './context/ListOfBooksInStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={primaryTheme}>
    <AppContextProvider>
    {/* <ListOfBooksInStore> */}
      <CssBaseline/>
      <App />
      {/* </ListOfBooksInStore> */}
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
