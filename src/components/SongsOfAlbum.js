import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CiHeart } from 'react-icons/ci';
import { FaCirclePlay } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
const SongsOfAlbum = ({ order, song, listOfSong, isOwner, onDeleteMusic }) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleIconLikeClick = () => {
        setIsLiked(!isLiked);
    };
    const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);

    const handleDeleteFromPlaylist = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to remove this song from Playlist?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!',
        }).then((result) => {
            if (result.isConfirmed) {
                onDeleteMusic();
            }
        });
    };
    return (
        <div className='grid grid-cols-5 pl-28 mr-20 ml-14 items-center rounded py-4 hover:bg-slate-800 cursor-pointer '>
            <div className='flex items-center space-x-4 '>
                <p className='text-gray-300'>{order + 1}.</p>
                <img
                    className='h-14 w-14 rounded object-cover'
                    src={song.imgUrl}
                    alt=''
                />
                <div>
                    <p className=' text-base truncate w-40'>{song.musicName}</p>
                    <p className='text-[13px] text-gray-500 truncate w-32'>
                        {song.author}
                    </p>
                </div>
            </div>

            <CiHeart
                onClick={handleIconLikeClick}
                className='ml-16 cursor-pointer text-2xl'
            />
            <p className='text-sm text-gray-500 ml-20'>
                {formatTime(song.duration)}
            </p>
            <FaCirclePlay className=' text-4xl ml-20 text-green-500' />
            <FaTrashCan className=' text-gray-400' />
        </div>
    );
};

export default SongsOfAlbum;
