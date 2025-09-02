import React from 'react'
import { useState } from 'react'
import SearchUser from '../component/SearchUser'
import UserCard from '../component/UserCard'

const MainLayout = () => {

    const [userId, setUserId] = useState('');

    const handleUserId = (id) => {
        setUserId(id);
    }

    return (
        <>
            <div className='flex items-center flex-col'>
                <div className='h-20 sm:w-auto w-[90%] rounded-2xl bg-gray-800 flex justify-center items-center flex-col shadow-2xl'>
                    <SearchUser enteredUserId={handleUserId} isServer={false} />
                </div> </div>
            {userId && <UserCard userId={userId} />}
        </>
    )
}

export default MainLayout
