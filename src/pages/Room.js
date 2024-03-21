import React from 'react';

import { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import PublicRoom from '../components/PublicRoom';
import teamwork from '../assets/images/teamwork.png';
import RoomModal from '../components/RoomModal';
function Room() {
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const openCreateModal = () => {
    setShowCreateRoom(!showCreateRoom);
  };
  //   const handleRoomDetail = () => {
  //     <Link to="/roomdetail">View Room Detail</Link>;
  //   };

  return (
    <div>
      <div className="bg-black opacity-90 text-white">
        <main className=" max-w-screen-xl flex flex-col flex-wrap mx-auto p-4 items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="text-center p-4 md:p-0 font-bold border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  md:text-xl text-white">
              Join a room to start listening to music!
            </div>
            <div className="bg-white h-64 w-64 rounded-full blur-2xl opacity-20 relative m-10"></div>
            <img src={teamwork} alt="listenImg" className="absolute h-96 w-96 mt-6" />
          </div>
          <div className="text-2xl font-bold text-center ">It's great to see you again.</div>
          <p className="text-xs font-semibold text-gray-400">Have a room code? Join a room with it:</p>
          <div className="flex">
            <input
              type="text"
              placeholder="XXXXXX"
              value={''}
              onChange={() => {}}
              className=" rounded-l-lg text-sm font-bold w-64 px-8 py-4 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-[#181818] "
            />
            <button
              className="bg-gradient-to-r bg-green-500 text-white font-medium rounded-r-lg px-6 py-2"
              onClick={() => {}}
            >
              Join
            </button>
          </div>
        </main>
        <div className=" max-w-screen-xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold pb-8">Your Rooms</p>
            <button
              onClick={openCreateModal}
              className="text-white bg-gradient-to-r bg-green-500 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 cursor-pointer"
            >
              <div className="flex items-center">
                <RiAddLine className="mr-2" />
                Create a Room
              </div>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6">
            <PublicRoom />
            <PublicRoom />
            <PublicRoom />
            <PublicRoom />
          </div>
        </div>
        {showCreateRoom && <RoomModal onToggleModal={openCreateModal} />}
      </div>
    </div>
  );
}

export default Room;
