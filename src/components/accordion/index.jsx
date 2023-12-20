import React from 'react';
import './index.css'
import userAvatar from '../../assets/user.jpg'

const AccordionComponent = ({ index, activeAccordion, setActiveAccordion, data}) => {
  const isOpen = activeAccordion === index;

  const toggleAccordion  = () => {
    setActiveAccordion(isOpen ? null : index)
  }

  return (
     <div className="accordion-wrapper">
        <div className='accordion-header' onClick={toggleAccordion}>
          <div className='accordion-header-title'>{data.name}</div>
          <div className='accordion-header-button'>
            {isOpen ? '-' : '+'}
          </div>
        </div>
        <div className={`accordion-body ${isOpen ? 'show' : ''}`}>
            <img className='user-image' src={userAvatar} alt=''/>
            <div className='user-details'>
                <div className='user-email'>{data?.email}</div>
                <div className='user-address'>{data?.address?.street}, {data?.address?.suite}</div>
                <div className='user-city-details'>{data?.address?.zipcode}, {data?.address?.city}</div>
            </div>
        </div>
    </div>
  )
}

export default AccordionComponent