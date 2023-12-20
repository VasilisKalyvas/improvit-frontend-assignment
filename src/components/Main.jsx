import React, { useEffect, useState } from 'react'
import SearchSection  from './search/index'
import UsersListComponent  from './UsersList'
import UsersListContext from '../context/index'
import axios from 'axios'

const Main = () => {
  const [users, setUsers] = useState([]);
  const [initialUsers, setInitialUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch users from jsonplaceholder Api
  const fetchUsers  = async () => {
    try {
      setIsLoading(true)

      const response = await axios.get('http://jsonplaceholder.typicode.com/users')

      if(response?.data?.length) {
        setUsers(response?.data)
        setInitialUsers(response?.data)
      }
      
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      throw error
    }
  }

  //Filter users by name and based on search text
  const filterUsers  = () => {
    const updatedArray = initialUsers?.filter((user) => 
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsers(updatedArray)
  }

  useEffect(() => {
    fetchUsers ()
  }, [])

  useEffect(() => {
    filterUsers();
  }, [searchText])

  return (
    <>
      <UsersListContext.Provider 
        value={{
          isLoading,
          setIsLoading,
          users,
          setUsers,
          totalUsers: initialUsers?.length,
          setSearchText,
        }}
      >
        <div className='w-100 d-flex flex-column p-4'>
          <SearchSection/>
          <UsersListComponent/>
        </div>
      </UsersListContext.Provider>
    </>
  )
}

export default Main