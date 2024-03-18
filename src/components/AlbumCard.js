import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const AlbumCard = ({ album, listOfAlbum }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            className={`bg-[#202020] w-full text-white flex flex-col pt-2 md:pt-0 items-center gap-2 cursor-pointer hover:bg-gray-700 rounded-lg pb-4 2xl:items-start text-center md:text-start ${
                isHovered ? 'hover:opacity-100' : 'hover:opacity-0'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='relative'>
                <img
                    src={album.AlbumImg}
                    alt='PlaylistImg'
                    className=' w-48 h-48 object-cover rounded'
                />
                {isHovered && (
                    <FaPlayCircle
                        className='absolute rounded-full hover:text-green-600 hover:scale-110 text-green-500 -bottom-[10%]
                         -right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-[46px] transition-opacity duration-300'
                    />
                )}
            </div>

            <p className='font-semibold text-base mt-2 px-0 md:px-2 truncate w-full '>
                {album.AlbumTitle}
            </p>
            <p className='text-xs text-gray-300 font-semibold px-0 md:px-2 truncate w-full'>
                {album.AlbumOwner}
            </p>
        </div>
    );
};

export default AlbumCard;
