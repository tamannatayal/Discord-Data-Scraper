import React from 'react'
import { saveAs } from 'file-saver';

const BannerHash = (props) => {
    const color = props.color;
    const cleaned = String(color).replace(/^#/, "");
    const formatHash = /^a_/.test(props.banner);
    const format = formatHash ? "gif" : "png";

    const ban = props.banner ? `https://cdn.discordapp.com/banners/${props.id}/${props.banner}.${format}?size=4096` : `https://singlecolorimage.com/get/${cleaned}/568x200`

    const save = (image) => {
        saveAs(image, `${props.name}-banner.${format}`)
    }

    return (
        <div className={`bg-gray-800 flex justify-center items-center rounded-t-xl`}>
            {ban && <img src={ban} alt="" className={`rounded-xl m-4 h-[200px] ${props.mode === "server" ? "sm:h-[200px] sm:w-[365px] h-[170px] w-[90%]" : "w-[90%] sm:w-[560px]"}`} />}
            {props.banner && <div className='h-[200px] w-full absolute rounded-xl flex items-center justify-center text-transparent hover:bg-gray-800 hover:cursor-pointer hover:opacity-75 hover:text-white' onClick={() => save(ban)}>Download</div>}
        </div>
    )
}

export default BannerHash
