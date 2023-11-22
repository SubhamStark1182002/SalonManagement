import React from 'react';
import './header.css'; // Import your CSS file for styli
//import jwt_decode from "jwt-decode"; 

import { GoogleLogin } from '@react-oauth/google';

import logo from '../asset/selonproject.png'



const header = () => {
  return (
    <header className="header">
      
        <img className="logo" src={logo} />

        <nav className="nav">
        <ul>
          
          <li><a href="#contact">
            <GoogleLogin
                onSuccess={(credencialResponse) => {
                    console.log(credencialResponse);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
                />
           </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
