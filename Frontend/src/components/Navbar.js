import React from 'react'
import '../styles/Navbar.css'
import {Link,useLocation} from "react-router-dom";
export const Navbar = () => {
  let location = useLocation();
    return (
    <>
    <nav>
      <ul className='nav-list'>
        <li>
          <h1 className='logo'>Stratergy Builder <span className="fa-rotate-by" style={{'display':'inline-block', '--fa-rotate-angle':'135deg'}}>
            <i className="fa-solid fa-share fa-flip-horizontal "></i>
            </span></h1>
        </li>
        <li>
          <Link className='goto-login-text' to={`${location.pathname==='/'?'/login':'/'}`}>{location.pathname==='/'?'Login':'Signup'}</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}