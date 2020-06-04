import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {

    return ( 
    <div>
        <div className = "navLogoContainer">
            <Link to='/' >  <img className = "logo" src={Logo}  alt="fireSpot"/>  </Link>
            </div>
        <div className='footer' >
            
         <nav>
    <div className= "shift">
            <ul id='footer-list' >
               <Link id='footer-links' to='/advice' > <li> Advice </li> </Link>
               <Link id='footer-links' to='/myadvices' > <li> My Advices </li> </Link> 
               
               <Link id='footer-links' to='/reviews' > <li> Write a Review! </li> </Link>
               <Link id='footer-links' to='/' > <li > &copy; by Mudi</li> </Link>
               
            </ul>
    </div>
            </nav>
        </div>
    </div>
     );
}
 
export default Footer;