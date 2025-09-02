import React from 'react'
import { useState, useEffect } from 'react'
import FetchHash from './FetchHash';
import Spinner from './Spinner';
import BannerHash from './BannerHash';
import AccountDate from './AccountDate';

const UserCard = ({ userId }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            setLoading(true)
            setUser(null)
            setError(null)

            try {
                const res = await fetch(`/api/discord-user?userId=${userId}`)
                if (!res.ok) throw new Error("Invalid ID or User Not Found");
                const data = await res.json();
                if (data?.message === "Unknown User") throw new Error("User not found");
                setUser(data)
                console.log("Data fetched.")
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }

        getUser();
    }, [userId])


    return (
        <div className='rounded-2xl bg-gray-800 flex flex-col shadow-2xl mt-5 sm:w-150 w-[90%] relative h-auto mb-6 '>
            {loading && <Spinner />}
            {!loading && error && (
                <div className="flex justify-center items-center h-20">
                    <h1 className="text-red-400 text-lg">{error}</h1>
                </div>
            )}
            {!loading && user && (
                <div className={`${(user.banner || user.banner_color) ? `sm:h-95 h-auto` : `sm:h-50 h-auto`}`}>
                    {(user.banner || user.banner_color) && (
                        <BannerHash banner={user.banner} id={user.id} color={user.banner_color} name={user.username} />
                    )}
                    <FetchHash avatar={user.avatar} id={user.id} banner={user.banner} color={user.banner_color} dis={user.discriminator} name={user.username} />
                    <div className={`pb-8  sm:relative sm:left-50 pl-5 sm:w-[60%] w-[90%] ${(user.banner || user.banner_color) ? `sm:top-[-40px] sm:pt-12 pt-15 sm:text-start text-center ` : `sm:top-10 sm:pt-0 pt-[190px] sm:text-start text-center top-20`}`}>
                        <p className='text-white text-xl font-medium'>Name: {user.global_name ? user.global_name : user.username}</p>
                        <p className='text-white text-xl font-medium'>Username: {user.username}</p>
                        <div className="text-white text-xl font-medium">
                            <AccountDate id={user.id} banner={user.banner} color={user.banner_color} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserCard
