import React from 'react'
import {Navigate, useNavigate } from 'react-router-dom';
import musicmeeting from '../asset/images/musicmeeting.jpg'
import { Link } from 'react-router-dom'; 
const PublicRoom = () => {
    const navigate = useNavigate();
    const handleRoomDetail = () => {
        // const navigate = useNavigate();
        navigate('/roomdetail');
        // <Navigate to ='/roomdetail'></Navigate>
        // <Link to ='/roomdetail'></Link>
      };
  return (
    <div>
        <button className='text-white size-30'
        onClick={''}/>
        <div className='flex '>
            {/* <button className='text-white w-10 h-10 bg-white pl-[-10] justify-end'/> */}
            <div className='bg-[#181818] w-full text-white flex items-center flex-col gap-4 cursor-pointer hover:bg-gray-800 rounded-lg py-2 px-4' 
                onClick={handleRoomDetail}>
                <p className='text-[30px] pt-8 font-bold'>Place 1</p>

                    <div className='h-48 w-48 object-cover'>
                    <img src={musicmeeting}
                    alt="RoomImage" className='h-48 w-48 object-cover'/>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='font-semibold text-lg'>Room ID</p>
                    <p className='text-sm font-semibold pb-4 text-gray-400 cursor-not-allowed'>#3253</p>
                </div>
            </div>

        </div>

    </div>

  );
};

export default PublicRoom;

