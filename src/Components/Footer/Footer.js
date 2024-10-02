import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
        <h1>ZeeTech</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Fugit quia maiores, sequi dolor perferendis veritatis corrupti aperiam eos,
             similique aspernatur consequatur qui consequuntur sunt debitis,
              ipsam dolore omnis officia laudantium!</p>
              
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-320-6006628</li>
            <li>contact@foodfries.com</li>
          </ul>
        </div>
       </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ FoodFries.com -All Right Reversed</p>
    </div>
    
    </>
  )
}

export default Footer