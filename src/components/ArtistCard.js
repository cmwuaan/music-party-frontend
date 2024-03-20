import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';

const ArtistCard = ({ artist, listOfArtist }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div
                className={`bg-[#202020] w-full text-white flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-700 rounded-lg pb-4 pt-2 px-[10px] 2xl:items-start text-center md:text-start ${
                    isHovered ? 'hover:opacity-100' : 'hover:opacity-0'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='w-40 h-40 relative'>
                    <img
                        src={artist.imgUrlArtist}
                        alt='artistImage'
                        className=' object-cover h-40 w-40 rounded-full'
                    />
                    {isHovered && (
                        <FaPlayCircle
                          className='absolute rounded-full hover:text-green-600 hover:scale-110 text-green-500 -bottom-[10%]
                         -right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-[46px] transition-opacity duration-300'
                        />
                    )}
                </div>
                <Link
                    to={`/song-detail/${artist._id}`}
                    className='font-semibold text-base mt-2 truncate w-full hover:underline'
                >
                    {artist.artistName}
                </Link>
                <p className='text-xs text-gray-400 truncate w-full'>
                    {artist.artistRole}
                </p>
            </div>
        </div>
    );
};

export default ArtistCard;
