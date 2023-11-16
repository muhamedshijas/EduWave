import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Route, Routes } from 'react-router-dom';
import Hompage from './Pages/Hompage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <MDBContainer fluid>
    <Routes >
    
    <Route path='/' element={<Hompage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
    </MDBContainer>
  );
}

export default App;
