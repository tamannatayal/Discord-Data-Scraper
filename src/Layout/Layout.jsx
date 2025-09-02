import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Server from './Server'
import { useLocation, NavLink } from 'react-router-dom'

const Layout = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const isServer = currentPath.includes("/server");

    const [hasServer, setHasServer] = useState(isServer)

    return (
        <>
            <div className='min-h-screen bg-linear-to-br from-black to-blue-800 flex flex-col justify-center items-center overflow-y-scroll'>
                <div className='w-40 text-white bg-gray-800 p-2 mb-15 flex justify-around rounded-2xl mt-6'>
                    <NavLink className={`cursor-pointer px-3 py-1 rounded-xl ${!hasServer ? "bg-blue-600" : "bg-transparent"}`}
                        onClick={() => setHasServer(false)}>User</NavLink>
                    <NavLink className={`cursor-pointer px-3 py-1 rounded-xl ${hasServer ? "bg-blue-600" : "bg-transparent"}`} to="/server"
                        onClick={() => setHasServer(true)}>Server</NavLink>

                </div>
                {isServer ? <Server /> : <MainLayout />}
            </div>
        </>
    )
}

export default Layout
