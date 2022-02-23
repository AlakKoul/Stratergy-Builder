  import React, { useState } from 'react'
  import {Link} from "react-router-dom";
  import '../styles/LoginAndSignUp.css'

export const SignUp = () => {

  const [isVisible, setVisible] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("run...")
    e.preventDefault(); //so that page should not refresh
    const response = await fetch("http://localhost:8000/api/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name : fName + " " + lName , email, password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
        console.log("register Successfull")
    }
    else{
        console.log(json);
        alert("Invalid credentials");
    }
  }

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

  const enterFName = (event)=>{
      setFName(event.target.value);
  }
  const enterLName = (event)=>{
      setLName(event.target.value);
  }
  const enterEmail = (event)=>{
      setEmail(event.target.value);
  }
  const enterPassword = (event)=>{
      setPassword(event.target.value);
  }
  const enterCPassword = (event)=>{
      setCPassword(event.target.value);
  }
    return (
    <>
    <div className="signup-component">
    
    <form className='signup-form' onSubmit={handleSubmit}>
      <div className='line'>
      <h2>Create Account</h2>
      <h4>{fName}&nbsp;{lName}</h4>
      </div>
      <div className='form-values'>
      <div className='rows row-1'>
      <input type="text" placeholder='First Name' value={fName} onChange={enterFName} className='input-data' required/>
      <input type="text" placeholder='Last Name' value={lName} onChange={enterLName} className='input-data' required/>
      </div>
      <div className='rows other-row'>
      <input type="email" placeholder='Email' value={email} onChange={enterEmail} className='input-data' required/>
      </div>
      <div className='rows other-row'>
      <input type="password" placeholder='Password' value={password} onChange={enterPassword} className='input-data' id= "id_password" required minLength={8}/>
      <i className={`fa-solid toggle ${!isVisible?'fa-eye':'fa-eye-slash'}`} id="togglePassword" onClick={togglePass}></i>
      </div>
      <div className='rows other-row'>
      <input type="password" placeholder='Confirm Password' value={cPassword} onChange={enterCPassword} className='input-data' required/>
      </div>
      <div className='row row-button other-row'>
      <button type="submit" className="signup-btn">SignUp</button>
      </div>
      <div className='goto-login'>
          <p>Already have an account?&nbsp;<Link to='/login' className='link-login'>Login</Link></p>
      </div>
      </div>
    </form>
    </div>
    </>
    )
}
