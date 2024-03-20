import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';

const SongCard = ({ song, listOfSong }) => {
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
        className="bg-[#202020] w-full text-white flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-700 rounded-lg pb-4 pt-2 px-[10px] 2xl:items-start text-center md:text-start "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-40 h-40 relative">
          <img src={song.imgUrl} alt="SongImage" className="rounded object-cover h-40 w-40" />
          {isHovered && (
            <FaPlayCircle
              className="absolute rounded-full text-green-500 hover:text-green-600 hover:scale-110 -bottom-[10%]
                         -right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-[46px] transition-opacity duration-300"
            />
          )}
        </div>
        <Link to={`/song-detail/${song._id}`} className="font-semibold text-base mt-2 truncate w-full hover:underline">
          {song.musicName}
        </Link>
        <p className="text-xs text-gray-400 truncate w-full">{song.author}</p>
      </div>
    </div>
  );
};

export default SongCard;
