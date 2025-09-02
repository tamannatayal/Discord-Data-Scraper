import React from 'react'
import SearchUser from '../component/SearchUser'
import { useState } from 'react'
import ServerCard from '../component/ServerCard'

const Server = () => {

    const [invite, setInvite] = useState('');

    const handleServer = (id) => {
        setInvite(id);
    }

    return (
        <div className='flex items-center flex-col'>
            <div className='h-20 sm:w-auto w-[90%] rounded-2xl bg-gray-800 flex justify-center items-center flex-col shadow-2xl'>
                <SearchUser enteredUserId={handleServer} isServer={true} />
            </div>
            {invite && <ServerCard invite={invite} />}
        </div>
    )
}

export default Server
