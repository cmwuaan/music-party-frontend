import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from 'react-router-dom';
import Message from './Message';
import user from '../../assets/images/user.jpg'
import io from 'socket.io-client';


const socket = io('http://localhost:5000');

const FormMessage = (params) => {
    const { roomId } = useParams();
    const location = useLocation();
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [validRoomId, setValidRoomId] = useState(true);
    const containerRef = useRef(null);
    const [isMe, setIsMe] = useState(false)

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
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          sendMessage();
        }
      };
    useEffect(()=>{
        containerRef.current.scrollTop = containerRef.current.scrollHeight;

    },[messages])
    const sendMessage = () => {
        console.log('Sending message...');
        socket.emit('sendMessage', { roomId, username, message });
        setMessage('');
        // Thêm tin nhắn mới vào danh sách tin nhắn để nó xuất hiện trên màn hình
        // setMessages(prevMessages => [...prevMessages, { username, message }]);
    };
  return (
    <div className="relative w-[70%] bg-transparent mb-8  text-white">
        <div className='flex absolute bottom-2 w-full pr-4'>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} 
                className='w-full h-[50px] px-4 py-2' 
                onKeyPress={handleKeyPress} placeholder="Type your message" />
            <button className='px-8 py-2 bg-[#b50f04]'
                 onClick={sendMessage}>Send</button>
        </div>
        <div ref={containerRef} className= "overflow-y-auto max-h-screen">
        <div className="text-3xl font-bold py-6 absolute pr-4 w-full">
            <div className="border flex flex-col gap-2 items-center border-gray-700 py-2 px-6 text-white bg-gray-800 rounded">
            <p className="text-xl">Name's Room</p>
            <p className="text-xs text-gray-400">ID: {roomId}</p>
            </div>
        </div>

        <div className='mb-[280px]'>
            {validRoomId ? (
                <>
                    <div>
                        {messages.map((msg, index) => (
                            <div>
                            <Message name={msg.username} avar={user} message={msg.message} isMe={username === msg.username?true:false}/>
                            {/* <div key={index}>
                                <strong>{msg.username}:</strong> {msg.message}
                            </div> */}
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h1>Invalid Room ID</h1>
            )}
        </div>
        </div>

    </div>
  );
};

export default FormMessage;