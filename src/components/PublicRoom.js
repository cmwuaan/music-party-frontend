import React from 'react';
import { useNavigate } from 'react-router-dom';
import musicmeeting from '../assets/images/musicmeeting.jpg';
const PublicRoom = () => {
  const navigate = useNavigate();
  const handleRoomDetail = () => {
    // const navigate = useNavigate();
    navigate('/room-detail');
    // <Navigate to ='/roomdetail'></Navigate>
    // <Link to ='/roomdetail'></Link>
  };
  return (
    <div>
      <button className="text-white size-30" onClick={() => {}} />
      <div className="flex ">
        <div
          className="bg-[#181818] w-full text-white flex items-center flex-col gap-4 cursor-pointer hover:bg-gray-800 rounded-lg py-2 px-4"
          onClick={handleRoomDetail}
        >
          <p className="text-[30px] pt-8 font-bold">Place 1</p>

          <div className="h-48 w-48 object-cover">
            <img src={musicmeeting} alt="RoomImage" className="h-48 w-48 object-cover" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-lg">Room ID</p>
            <p className="text-sm font-semibold pb-4 text-gray-400 cursor-not-allowed">#3253</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicRoom;
