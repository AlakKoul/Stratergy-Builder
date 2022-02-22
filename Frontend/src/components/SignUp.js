import React, { useState } from 'react'
import '../styles/SignUp.css'

export const SignUp = () => {

const [isVisible, setVisible] = useState(false);

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
const handleOnChange = (event)=>{
    setText(event.target.value);
}
  return (
   <>
   <div className="signup-component">
   
   <form className='signup-form'>
    <div className='line'>
    <h2>Create A New Account</h2>
    </div>
    <div className='form-values'>
    <div className='rows row-1'>
    <input type="text" placeholder='First Name' value='fname' onChange={handleOnChange} className='input-data' required/>
    <input type="text" placeholder='Last Name' value='lname' onChange={handleOnChange} className='input-data' required/>
    </div>
    <div className='rows other-row'>
    <input type="email" placeholder='Email' value='email' onChange={handleOnChange} className='input-data' required/>
    </div>
    <div className='rows other-row'>
    <input type="password" placeholder='Password' value='password' onChange={handleOnChange} className='input-data' id= "id_password" required minLength={8}/>
    <i className={`fa-solid toggle ${!isVisible?'fa-eye':'fa-eye-slash'}`} id="togglePassword" onClick={togglePass}></i>
    </div>
    <div className='rows other-row'>
    <input type="password" placeholder='Confirm Password' value='cPassword' onChange={handleOnChange} className='input-data' required/>
    </div>
    <div className='row row-button other-row'>
    <button type="submit" className="signup-btn">SignUp</button>
    </div>
    <div className='goto-login'>
        <p>Already have an account?&nbsp;<a href='/' className='link-signin'>Login</a></p>
    </div>
    </div>
   </form>
   </div>
   </>
  )
}
