import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import SignInSide from './Pages/Authentication/SignIn';
import { Provider } from 'react-redux';
import {store} from "./Redux/Store"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
const theme = createTheme({
    typography: {
      // Define your typography variants here
      body2: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },
    palette: {
      // Define your color palette here
    },
  });
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<ThemeProvider theme={theme}>
<ChakraProvider>
    <Provider store={store}>
<BrowserRouter>
    <App />

    </BrowserRouter></Provider>
    </ChakraProvider>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
