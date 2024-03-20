import React from 'react'
import logo from '../asset/images/logo.png'
import { Link } from 'react-router-dom';
import UserAvatar from '../components/UserAvatar';
import { useState, useEffect } from 'react';
import { RiAddLine } from 'react-icons/ri';
import PublicRoom from '../components/PublicRoom';
import teamwork from '../asset/images/teamwork.png'
function Room() {
    const [showCreateRoom, setShowCreateRoom] = useState(false)
    const openCreateModal = () =>
    {
        setShowCreateRoom(!showCreateRoom)
    }
    const handleRoomDetail = () => {
        <Link to="/roomdetail">View Room Detail</Link>
      };

  return (
    <div >
        <div className='pb-11'>
            <header  >
                <nav className='bg-[#272727] text-white w-full z-20 top-0 left-0 shadow fixed'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <div className='flex items-center'>
                    <img src={logo} className='h-8 mr-3' alt='WebsiteLogo'/>
                    <span className='self-center text-2xl font-semibold whitespace-nowrap '>
                        <Link to="/signup">
                        Music Party
                        </Link>
                    </span>
                    </div>
                    <div className='flex md:order-2'>
                    <button onClick={openCreateModal}
                        className='text-white bg-gradient-to-r from-indigo-600 to-purple-700 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 cursor-pointer'>
                    <div className="flex items-center">
                    <RiAddLine className="mr-2" />
                        Create a Room</div>
                    </button>
                    <UserAvatar/>
                    <div className="relative inline-block">
                </div>
                    </div>
                        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
                        <div className='absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  md:text-xl text-white '>
                        Join a room to start listening to music!
                    </div>
                    </div>
                </div>
                </nav>
            </header>

        </div>
        <div className='bg-black opacity-90 text-white'>
            <main className=' max-w-screen-xl flex flex-col flex-wrap mx-auto p-4 items-center justify-center gap-4'>
            <div className=''>
                <img src={teamwork}
                alt='listenImg'
                className=' h-96 w-96'/>
            </div>
            <div className='text-2xl font-bold text-center '>
                It's great to see you again.
            </div>
            <p className='text-xs font-semibold text-gray-400'>
            Have a room code? Join a room with it:
            </p>
            <div className='flex'>
                <input type='text' placeholder='XXXXXX'
                    value={''}
                    onChange={''}
                    className=' rounded-l-lg text-sm font-bold w-64 px-8 py-4 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-[#181818] '/>
                <button className='bg-gradient-to-r from-indigo-600 to-purple-700  text-white font-medium rounded-r-lg px-6 py-2'
                    onClick={''}>
                    Join
                </button>
            </div>
            </main>
            <div className=' max-w-screen-xl mx-auto p-4'>
            <p className='text-3xl font-bold pb-8'>
            Your Rooms
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6'>
          {/* {
            listOwnRoom.map((room,index) => (
              <PublicRoom
              room = {room}
              key={index}/>
            ))
          } */}
            <PublicRoom/>
            <PublicRoom/>
            <PublicRoom/>
            <PublicRoom/>
            </div>
        </div>
        {
        (
        showCreateRoom &&    <div className='fixed inset-0 flex items-center justify-center z-50'>
                <div className='fixed inset-0 bg-gray-900 opacity-50'></div>
                <div className='modal-container bg-[#1f2937] text-white w-96 rounded-lg p-6 z-50'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold '>Create a Room</h2>
                    <button className='text-white  text-2xl rounded-full px-2 hover:bg-slate-600'
                    onClick={openCreateModal}>
                    &times;
                    </button>
                </div>
                <p className='font-semibold mt-5'>Room name:</p>
                <input value={''} onChange={''} className="border border-gray-300 shadow-sm rounded-lg py-2 px-4 bg-[#1f2937] mt-2 w-full " type="text" placeholder="Your Room" required/>
                <p className='font-semibold mt-5'>Secret room {'('}Not required{')'}</p>
                <input value={''} onChange={''} className="border border-gray-300 shadow-sm rounded-lg py-2 px-4 bg-[#1f2937] mt-2 w-full " type="text" placeholder="Password" required/>
                <button onClick={''} className='  shadow-sm rounded-lg py-2 px-6 bg-gradient-to-r from-indigo-600 to-purple-700   w-full mt-8'>Create</button>
                </div>
            </div>
            )} 
        </div>
         
    </div>
  )
}

export default Room;