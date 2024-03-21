import React, { useEffect } from 'react';

const RoomDetails = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden max-h-screen">
      <div className="w-[70%] bg-black text-white">
        <div className="flex items-center text-3xl font-bold py-8 w-full gap-96">
          <i
            className="ri-arrow-left-s-line cursor-pointer text-2xl text-white rounded-full bg-slate-700 px-3 py-2 hover:bg-slate-600 ml-8"
            onClick={() => {}}
          ></i>
          <div className="border flex flex-col gap-2 items-center border-gray-700 py-2 px-6 text-white bg-gray-800 rounded">
            <p className="text-xl">Name's Room</p>
            <p className="text-xs text-gray-400">ID: 1234</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 ml-28 ">
          <p className="text-xl font-bold text-gray-400 ">Chat Box</p>
          <div className="flex gap-2 items-center">
            <p className="flex justify-center items-center w-5 h-5 rounded-full bg-green-500 text-xs font-bold ">10</p>
            <p className="text-xs font-bold">Online</p>
          </div>
        </div>

        <div className="max-h-[50%] overflow-y-auto ">
          {/* <ChatBox messages= {listMessage}/>
          <MessageForm idRoom={room._id} onAddMessage = {callBackAddMessage}/> */}
        </div>
      </div>
      <div className="w-[30%] bg-black opacity-90 text-white px-8 pb-20">
        <div className="flex flex-row justify-between items-center">
          <p className="my-8 font-bold text-xl">Songs in Queue</p>
          {<i className="ri-play-list-add-line hover:text-gray-500 cursor-pointer text-xl" onClick={() => {}}></i>}
        </div>
        <div className="h-screen overflow-y-auto max-h-screen ">
          {/* {listMusicInQueue.map((music, index) => (
            <SonginQueue
              isOwner = {isOwner}
              key={index}
              music = {music}
              backgroundSong="#181818"
              listOfSong = {listMusicInQueue}
              onRemoveSongClick = {() => handleOnRemoveSong(music)}
            />
          ))} */}
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-[#1f2937] text-white pb-16 ">
          <h3 className="font-bold text-2xl my-8">Add your song to Queue!</h3>
          <input
            type="text"
            placeholder="Search for a song to queue..."
            className="bg-[#1f2937] border border-gray-400 w-full py-2 px-3 rounded"
            onChange={() => {}}
          />
          <div className="mt-8 grid grid-cols-2 gap-x-4 ">
            {/* {listRecommendMusic.slice(0, 6).map((music, index) => (
                  <SongWithSearch
                    key={index}
                    music = {music}
                    onAddSongClick = {()=>handleOnAddSong(music)}
                    backgroundSong="#2B3440"
                  />
                ))} */}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => {}}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default RoomDetails;
