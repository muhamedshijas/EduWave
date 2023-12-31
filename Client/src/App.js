import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Route, Routes } from 'react-router-dom';
import Hompage from './Pages/Hompage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import axios from 'axios';
function App() {
  axios.defaults.baseURL="http://localhost:5000/"
  axios.defaults.withCredentials=true
  return (
  
    <Routes >
    
    <Route path='/' element={<Hompage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
  );
}

export default App;
