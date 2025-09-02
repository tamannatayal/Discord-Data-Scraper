import React from 'react'
import { useState } from 'react';

const SearchUser = ({ enteredUserId, isServer }) => {

    const [value, setValue] = useState('');

    const handleButton = () => {
        if (value === null) {
            return;
        } else {
            enteredUserId(value)
            setValue('');
            console.log("Please Wait...")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleButton();
        }
        else if (!isServer && e.key === 'e') {
            e.preventDefault();
        }
    }

    return (
        <>
            <div className=' flex flex-row m-5 w-[90%]'>
                <input placeholder={!isServer ? "User ID Here..." : "Invite Link here..."} id='userID' className='p-4 md:w-100 sm:w-80 w-50 h-10 bg-gray-900 text-white rounded-xl focus:outline-none [&::-webkit-inner-spin-button]:appearance-none' value={value} type={isServer ? 'text' : 'number'} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyPress} />
                <button id='searchBtn' className='ml-5 mr-5 sm:ml-8 sm:mr-2 w-20 bg-blue-700 text-white rounded-xl cursor-pointer active:bg-blue-500 shadow-black pr-2 pl-2' onClick={handleButton}>Search</button>
                { }
            </div>
        </>
    )
}

export default SearchUser
