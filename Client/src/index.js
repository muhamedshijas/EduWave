import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";

import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>  
  </ChakraProvider>
  </React.StrictMode>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
