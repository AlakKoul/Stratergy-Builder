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
          {
            (location.pathname==='/' || location.pathname==='/login' || location.pathname==='/register') &&
            <Link className='goto-login-text' to={`${location.pathname==='/'?'/login':'/'}`}>{location.pathname==='/'?'Login':'Signup'}</Link>
          }
          {
             (location.pathname==='/home') 
             // && 

            //  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            //   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            // </svg>
          }
        </li>
      </ul>
    </nav>
    </>
  )
}