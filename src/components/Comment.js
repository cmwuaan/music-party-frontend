import {useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
const Comment = ({ username, comment, avatar }) => {
    const [like, setLike] = useState(false);
    const handleLikeClick = () => {
        setLike(!like);
    };
    return (
        <div className='flex flex-row justify-between bg-[#222222] rounded px-8 py-4 items-center my-4'>
            <div className='flex flex-row items-center gap-4'>
                <img
                    src={avatar}
                    alt='img'
                    className=' w-14 h-14 rounded-full object-cover'
                />
                <div className='text-base'>
                    <p className='font-semibold'>{username}</p>
                    <p className='text-gray-400'>{comment}</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                {like ? (
                    <FaHeart
                        className='text-xl cursor-pointer'
                        onClick={handleLikeClick}
                    />
                ) : (
                    <FaRegHeart
                        className='text-xl cursor-pointer'
                        onClick={handleLikeClick}
                    />
                )}
                <p>0</p>
            </div>
        </div>
    );
};

export default Comment
