import React, { useContext, useState } from 'react'
import AccordionComponent from './accordion'
import UsersListContext from '../context'
import LoadingSpinner  from './spinner'

const UsersList = () => {
    const [activeAccordion, setActiveAccordion] = useState(null)
    const {isLoading, users} = useContext(UsersListContext);

  return (
    <div>
        {
            isLoading
            ?
                <div className='w-100 d-flex justify-content-center'>
                    <LoadingSpinner />
                </div>
            : 
                <>
                    {
                        users?.map((user, key) => (
                            <AccordionComponent
                                key={key}
                                index={key}
                                data={user}
                                activeAccordion={activeAccordion}
                                setActiveAccordion={setActiveAccordion}
                            />
                        ))
                    }
                </>
        }
    </div>
  )
}

export default UsersList