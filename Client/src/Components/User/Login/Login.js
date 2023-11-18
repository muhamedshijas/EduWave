import React, { useState } from 'react'
import axios from 'axios';
import loginImage from '../../../assets/images/second-image.png'
import './Login.css'
import { MDBInput } from 'mdb-react-ui-kit'
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function handleSubmit(e){
    e.preventDefault()
    let {data}= await axios.post('/user/login',{email,password})

  }
  return (
    <div>
      <section className='login-main'>
      <div className="login">
      <div className="login-image">
      <img src={loginImage} alt="" srcset="" />
      </div>
      <div className="login-form">
      <h3>Student Login</h3>
      <form action="">
      <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <div className="forget w-100">
      <p className='text-primary'> Forget Password</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>New User Sign up here</p>
      
      </div>
      </div>
      </section>
    </div>
  )
}

export default Login
