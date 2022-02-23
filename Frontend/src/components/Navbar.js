import React from 'react'
import '../styles/Navbar.css'
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <>
    <nav>
      <ul className='nav-list'>
        <li>
          <h1 className='logo'>Stratergy Builder <span className="fa-rotate-by" style={{'display':'inline-block', '--fa-rotate-angle':'135deg'}}>
            <i class="fa-solid fa-share fa-flip-horizontal "></i>
            </span></h1>
        </li>
        <li>
          <Link className='goto-login-text' to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}