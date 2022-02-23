  import React, { useState } from 'react'
  import '../styles/SignUp.css'

  export const SignUp = () => {

  const [isVisible, setVisible] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

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

  const changeFName = (event)=>{
      setFName(event.target.value);
  }
  const changeLName = (event)=>{
      setLName(event.target.value);
  }
  const changeEmail = (event)=>{
      setEmail(event.target.value);
  }
  const changePassword = (event)=>{
      setPassword(event.target.value);
  }
  const changeCPassword = (event)=>{
      setCPassword(event.target.value);
  }
    return (
    <>
    <div className="signup-component">
    
    <form className='signup-form'>
      <div className='line'>
      <h2>Create Account</h2>
      <h4>{fName}&nbsp;{lName}</h4>
      </div>
      <div className='form-values'>
      <div className='rows row-1'>
      <input type="text" placeholder='First Name' value={fName} onChange={changeFName} className='input-data' required/>
      <input type="text" placeholder='Last Name' value={lName} onChange={changeLName} className='input-data' required/>
      </div>
      <div className='rows other-row'>
      <input type="email" placeholder='Email' value={email} onChange={changeEmail} className='input-data' required/>
      </div>
      <div className='rows other-row'>
      <input type="password" placeholder='Password' value={password} onChange={changePassword} className='input-data' id= "id_password" required minLength={8}/>
      <i className={`fa-solid toggle ${!isVisible?'fa-eye':'fa-eye-slash'}`} id="togglePassword" onClick={togglePass}></i>
      </div>
      <div className='rows other-row'>
      <input type="password" placeholder='Confirm Password' value={cPassword} onChange={changeCPassword} className='input-data' required/>
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
