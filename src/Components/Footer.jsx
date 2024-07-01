import React from 'react'
import './Footer.css'

import Wicipidia from '../assets/Wicipidia.png'
const Footer = () => {
  return (
    <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center' }}>

    <div className='container-footer'>
      <h1 className='heading'>Want to know more about <span style={{fontWeight:'bold'}}>Chhatrapati Shivaji Maharaj</span> </h1>
      <a style={{textDecoration :'none'}} href="https://en.wikipedia.org/wiki/Shivaji">  <button className='button'>
          <img className='image' src={Wicipidia}   alt="" />
          <span style={{fontWeight: 'bolder'}}>Haome</span>
            </button></a>
    </div>
    
    <p style={{color:'white'}}>Made by ❤️ Krunal Bende</p>

    </div>
  )
}

export default Footer
