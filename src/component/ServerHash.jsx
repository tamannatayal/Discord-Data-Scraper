import React from 'react'
import { saveAs } from 'file-saver';

const ServerHash = (props) => {

    const formatHash = /^a_/.test(props.avatar);
    const format = formatHash ? "gif" : "png";

    const image = props.avatar ? `https://cdn.discordapp.com/icons/${props.id}/${props.avatar}.${format}?size=128` : ``

    const save = (image) => {
        saveAs(image, `${props.name}.${format}`)
    }

    return (
        <div className="bg-gray-800 flex justify-center items-center rounded-4xl absolute top-[160px] md:left-[140px] left-[105px]">
            <img src={image} alt="server img" className={`rounded-4xl m-2 ${props.avatar ? `h-[90px]` : `h-[90px] w-[90px] bg-gray-600`}`} />
            <div className='h-full w-full absolute rounded-4xl flex items-center justify-center text-transparent hover:bg-gray-800 hover:cursor-pointer hover:opacity-75 hover:text-white' onClick={() => save(image)}>Download</div>
        </div>
    )
}

export default ServerHash
