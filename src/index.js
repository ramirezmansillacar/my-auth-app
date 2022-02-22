import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './Auth';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Auth>
        <App />
      </Auth>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();