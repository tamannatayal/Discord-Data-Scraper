import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from './Spinner';
import ServerHash from './ServerHash';
import BannerHash from './BannerHash';
import AccountDate from './AccountDate';

const ServerCard = ({ invite }) => {

    const [server, setServer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const inviteLink = invite.split('/');

    useEffect(() => {
        setLoading(true)
        setServer(null)
        setError(null)

        const isValid = (link) => {
            if (link[0] === "https:" && link[1] === "" && link[2] === "discord.gg")
                return link[3]
            else if (link[0] === "discord.gg" || link[0] === ".gg" || link[0] === "")
                return link[1]
            else if (link.length === 1)
                return link[0]
        }

        const getServer = async () => {
            try {
                let res = await fetch(`/api/discord-server?invite=${isValid(inviteLink)}`)
                if (!res.ok) throw new Error("Invalid Invite or Server Not Found")
                let data = await res.json();
                if (data.message === "404: Not Found") throw new Error("Server Not Found")
                if (data.message === "Unknown Invite") throw new Error("Invite Does not Exist")
                /* === */
                setServer(data);
                console.log("Data Fetched.")

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        getServer();
    }, [invite])

    const getDate = (str) => {
        const date = new Date(str);
        return date.toLocaleString();
    }

    return (
        <div className='flex justify-center items-center h-full mb-6 sm:w-auto w-90'>
            <div className=' rounded-2xl bg-gray-800 flex flex-col shadow-2xl mt-5 sm:w-100 w-[90%] relative h-auto'>
                {loading && <Spinner />}
                {!loading && error && (
                    <div className="flex justify-center items-center h-20">
                        <h1 className="text-red-400 text-lg">{error}</h1>
                    </div>
                )}
                {!loading && server && (
                    <div className="h-auto">
                        <BannerHash banner={server.guild.banner} id={server.profile.id} color="#000000" mode="server" name={server.guild.name} />
                        <div>
                            <ServerHash avatar={server.profile.icon_hash} id={server.profile.id} name={server.guild.name} />
                        </div>
                        <div className='flex justify-center pb-6'>
                            <div className='pl-7 pr-7 pt-10'>
                                <h1 className='text-white text-3xl font-medium text-center mb-5'>{server.guild.name}</h1>
                                <h2 className='text-white text-[1.1rem] font-small text-center'>{server.guild.description ? server.guild.description : "No Description Available"}</h2>
                                <div className='mt-5 flex justify-around mr-5'>

                                    <div className='flex p-5 ml-5 '>
                                        <div className='bg-gray-500 w-4 h-4 rounded-2xl flex justify-center items-center mt-1'>
                                            <div className='bg-gray-800 w-2 h-2 rounded-2xl'></div>
                                        </div>
                                        <div className='text-white ml-2'>{server.profile.member_count.toLocaleString()}</div>
                                    </div>
                                    <div className='p-5 ml-5 flex '>
                                        <div className='bg-green-500 w-4 h-4 rounded-2xl mt-1'></div>
                                        <div className='text-white ml-2'>{server.profile.online_count.toLocaleString()}</div>
                                    </div>
                                </div>
                                <div>{ }</div>
                                <div className='text-center mt-5 font-medium text-red-200'>Invite link expires at: {server.expires_at ? getDate(server.expires_at) : "Never"}</div>
                            </div>
                        </div>
                        <div className="text-white text-xl font-medium absolute left-10 bottom-7">

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServerCard
