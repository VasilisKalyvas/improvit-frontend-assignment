import React, { useState } from 'react'
import searchIcon from '../../../assets/search.png'
import hoveredSearchIcon  from '../../../assets/search-hover.png'
import './index.css'

const InputField = ({ handleOnChange }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`search-container `}>
      <div className='search-wrapper'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
        <input 
          className={`search-input ${isHovered ? 'hovered' : ''}`} 
          placeholder='Search by name' 
          onChange={handleOnChange}
        />
        <img 
          className='search-button' 
          src={isHovered ? hoveredSearchIcon  : searchIcon}
          alt=''
        />
      </div>
    </div>
  )
}

export default InputField