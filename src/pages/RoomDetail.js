import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import FormMessage from '../components/ChatApp/FormMessage';
import user from '../assets/images/user.jpg'


const socket = io('http://localhost:5000');
const RoomDetails = () => {
   const { roomId } = useParams();
    const location = useLocation();
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [validRoomId, setValidRoomId] = useState(true);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const usernameParam = queryParams.get('username');
        if (usernameParam) {
            setUsername(usernameParam);
        } else {
            window.location.href = '/'; // Chuyển hướng về trang Room nếu thiếu thông tin username
        }
    }, [location.search]);

useEffect(() => {
    socket.on('message', (data) => {
        setMessages(prevMessages => [...prevMessages, data]); // Sử dụng callback để đảm bảo sử dụng phiên bản mới nhất của state
    });

    socket.on('connect', () => {
        console.log('Connected to server successfully!');
    });

    socket.emit('joinRoom', { username, roomId }); // Tham gia phòng ngay khi component được mount

    return () => {
        socket.disconnect();
    };
}, []);


    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server successfully!');
        });

        if (!roomId) {
            setValidRoomId(false);
        }

        return () => {
            socket.disconnect();
        };
    }, [roomId]);

    const sendMessage = () => {
        console.log('Sending message...');
        socket.emit('sendMessage', { roomId, username, message });
        setMessage('');
        // Thêm tin nhắn mới vào danh sách tin nhắn để nó xuất hiện trên màn hình
        setMessages(prevMessages => [...prevMessages, { username, message }]);
    };

  return (
    <div className="w-full h-full flex  max-h-screen">
      <FormMessage/>

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
