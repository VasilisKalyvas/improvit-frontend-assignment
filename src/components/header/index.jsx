import React from 'react'
import './index.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-upper-border'></div>
      <div className='header-content'>
        <div className='header-logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='header-title'>
          Team Members
        </div>
      </div>
    </div>
  )
}

export default Header