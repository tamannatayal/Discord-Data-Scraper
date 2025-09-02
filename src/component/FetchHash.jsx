import React from 'react'
import { saveAs } from 'file-saver';

const FetchHash = (props) => {

    const hasBanner = (props.banner || props.color)
    const formatHash = /^a_/.test(props.avatar);
    const format = formatHash ? "gif" : "png";

    const image = props.avatar ? `https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}.${format}?size=128` : `https://cdn.discordapp.com/embed/avatars/${props.dis}.png?`

    const save = (image) => {
        saveAs(image, `avatar.${format}`)
    }

    return (
        <div className={`bg-gray-800 flex justify-center items-center rounded-4xl absolute ${hasBanner ? `sm:top-[40%] top-[35%] sm:left-[10%] left-[27%]` : `top-[10%] sm:left-5 left-[27%]`}`}>
            <img src={image} alt="" className={`rounded-4xl m-2 ${props.avatar ? `` : `h-[128px]`}`} />
            <div className='h-full w-full absolute rounded-4xl flex items-center justify-center text-transparent hover:bg-gray-800 hover:cursor-pointer hover:opacity-75 hover:text-white' onClick={() => save(image)}>Download</div>
        </div>
    )
}

export default FetchHash
