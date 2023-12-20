import React, { useContext } from 'react'
import InputField from './input'
import UsersCount from './users-count'
import UsersListContext from '../../context';

const SearchSection  = () => {
  const { setSearchText, totalUsers } = useContext(UsersListContext);
  
  const handleOnChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div className='d-flex align-items-center justify-content-between pb-3'>
      <InputField handleOnChange={handleOnChange}/>
      <UsersCount content={`${totalUsers} People`}/>
    </div>
  )
}

export default SearchSection 