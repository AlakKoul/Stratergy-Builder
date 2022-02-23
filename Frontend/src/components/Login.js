import React, { useState } from 'react'
import {Link} from "react-router-dom";
import '../styles/LoginAndSignUp.css'

export const Login = () => {
  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePass= () =>{
    const password = document.querySelector('#id_password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if(type==='text'){
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  }
  const enterEmail = (event)=>{
      setEmail(event.target.value);
  }
  const enterPassword = (event)=>{
      setPassword(event.target.value);
  }
  return (
    <>
    <div className="login-component">
    
    <form className='login-form'>
      <div className='line'>
      <h2>Login</h2>
      </div>
      <div className='form-values'>
      <div className='rows other-row'>
      <input type="email" placeholder='Email' value={email} onChange={enterEmail} className='input-data' required/>
      </div>
      <div className='rows other-row'>
      <input type="password" placeholder='Password' value={password} onChange={enterPassword} className='input-data' id= "id_password" required minLength={8}/>
      <i className={`fa-solid toggle ${!isVisible?'fa-eye':'fa-eye-slash'}`} id="togglePassword" onClick={togglePass}></i>
      </div>
      <div className='row row-button other-row'>
      <button type="submit" className="login-btn">Login</button>
      </div>
      <div className='goto-signup'>
          <p>Don't have an account?&nbsp;<Link to='/' className='link-signin'>Signup</Link></p>
      </div>
      </div>
    </form>
    </div>
    </>
  )
}
