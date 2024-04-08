import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { RiCameraFill, RiDeleteBin6Fill, RiEmotionLine, RiFileGifLine, RiSendPlane2Fill } from 'react-icons/ri';
import Comment from '../components/Comment';

const SongDetail = () => {
    const lyrics = [
        'Anh cứ ôm bao hi vọng nhìn về phía em\nDù nơi chúng ta là ngày với đêm\nTình yêu ấy vô vọng như nỗi nhớ dịu êm\nTrái đất nhìn về Mặt trời\nTrái tim anh cũng như mọi vì tinh tú\nCứ thế xoay mãi theo vũ trụ\nĐuổi theo ánh sáng của Mặt trời mà cứ xa vời suốt đời\nCho anh được biết vì sao giam bí mật của em\nNơi em sẽ đến mỗi khi nỗi cô đơn hiện lên\nBài hát mà em muốn nghe để thấy được vỗ về\nBài hát sẽ ôm em, ôm em, ôm em, ôm em\nÝ nghĩa của những ngôi sao lấp lánh trên cao, em biết không?\nÝ nghĩa của trái tim anh đang đập từng giây, em hiểu không?\nTình yêu mà anh dành cho em, tình yêu mà không cần gọi tên\nAnh cứ ôm bao hi vọng nhìn về phía em\nDù nơi chúng ta là ngày với đêm\nTình yêu ấy vô vọng như nỗi nhớ dịu êm\nTrái đất nhìn về Mặt trời\nTrái tim anh cũng như mọi vì tinh tú\nCứ thế xoay mãi theo vũ trụ\nĐuổi theo ánh sáng của Mặt trời mà cứ xa vời suốt đời\n ',
    ];
    const listComment = [
        {
            displayName: 'UserA',
            avatar: 'https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg',
            message: 'Bài viết rất hữu ích. Cảm ơn bạn đã chia sẻ!',
        },
        {
            displayName: 'User2',
            avatar: 'https://www.shareicon.net/download/2016/06/27/787507_man_512x512.png',
            message: 'Bài viết rất hữu ích. Cảm ơn bạn đã chia sẻ!',
        },
        {
            displayName: 'User3',
            avatar: 'https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg',
            message: 'Bài viết rất hữu ích. Cảm ơn bạn đã chia sẻ!',
        },
        // Thêm các đối tượng bình luận khác vào đây
    ];
    const [commentText, setCommentText] = useState('');
    const [isTextareaFocused, setTextareaFocused] = useState(false);
    const handleTextareaFocus = async (event) => {
        const textareaValue = event.target.value.trim();
        setTextareaFocused(textareaValue !== '');
        setCommentText(event.target.value);
    };
    return (
        <div>
            <div className='py-8 bg-black opacity-90 text-white w-full h-full'>
                <div className=' bg-[#9890A0] '>
                    <div className='h-[12rem] md:h-[18rem] bg-cover bg-center bg-gradient-to-b from-transparent to-[#181818]'>
                        <div className=' items-center flex flex-row justify-center '>
                            <div className=' flex flex-row gap-6 mt-8 '>
                                <div className='mr-0 md:mr-4 rounded-full'>
                                    <IoMdArrowBack className='cursor-pointer text-3xl md:text-4xl rounded-full bg-slate-800 hover:bg-slate-700 px-2 py-2' />
                                </div>
                                <img
                                    src='https://i.ytimg.com/vi/ohgodOTSHjA/maxresdefault.jpg'
                                    alt='songImg'
                                    className='w-28 h-28 md:ml-0 md:h-48 md:w-48 rounded shadow-2xl shadow-black object-cover'
                                />
                                <div className='flex flex-col gap-4'>
                                    <p className='font-bold md:text-[40px] text-xl '>
                                        Trái Đất ôm Mặt Trời
                                    </p>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-base font-semibold'>
                                            Author of this Song
                                        </p>

                                        <p className='text-sm text-gray-300'>
                                            V-Pop
                                        </p>
                                        <div className='flex flex-row justify-between gap-96 items-center '>
                                            <p className='text-xs text-gray-300'>
                                                Release in 2023 - 10000 View
                                            </p>
                                            <div className=' btnEditDelete hidden md:flex flex-row gap-2 items-center'>
                                                <i className='ri-checkbox-circle-fill text-2xl mr-4 text-green-600'></i>
                                                <div className='flex flex-row gap-2 items-center border px-3 py-[3px] border-gray-400 rounded hover:border-gray-300 '>
                                                    <MdEdit />
                                                    <p className='text-xs font-semibold '>
                                                        Edit
                                                    </p>
                                                </div>
                                                <button className='flex flex-row gap-2 items-center border px-2 py-[3px] border-gray-400 rounded hover:border-gray-300 '>
                                                    <RiDeleteBin6Fill />
                                                    <p className='text-xs font-semibold '>
                                                        Delete
                                                    </p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-auto py-8'>
                    <i className='ri-pause-circle-fill text-[60px] cursor-pointer text-green-600'></i>
                    <p className='font-bold py-8 text-xl border-b border-gray-500'>
                        Lyrics of the Song:
                    </p>
                    <div className='text-slate-300 text-sm py-8 leading-7'>
                        <p className='whitespace-pre-line'>{lyrics}</p>
                        {/* {lyrics.length > halfLength && (
                          <button
                              className='text-indigo-600 hover:underline mt-4'
                              onClick={() => setShowAllLyric(!showAllLyric)}
                          >
                              {showAllLyric ? 'Show Less' : 'Show More'}
                          </button>
                      )} */}
                    </div>
                    <p className='font-bold pb-8 text-xl '>Comments (3)</p>
                    <div>
                        {listComment &&
                            listComment.map((comment, index) => (
                                <Comment
                                    key={index}
                                    username={comment.displayName}
                                    comment={comment.message}
                                    avatar={comment.avatar}
                                />
                            ))}
                        <div className='flex flex-col bg-[#222222] rounded justify-between px-4 py-4  '>
                            <textarea
                                id='yourcomment'
                                name='yourcomment'
                                className=' focus:border-none active:border-none resize-none rounded-t-xl w-full text-sm px-4 py-2 bg-[#444444] outline-none overflow-hidden'
                                cols='6'
                                rows='2'
                                placeholder='Comment here'
                                onChange={handleTextareaFocus}
                                value={commentText}
                            ></textarea>

                            <div className='flex gap-4 bg-[#444444] py-2 px-4 rounded-b-xl justify-between'>
                                <div className='flex flex-row gap-3'>
                                    <RiEmotionLine className='cursor-pointer text-xl' />
                                    <RiCameraFill className='cursor-pointer text-xl' />
                                    <RiFileGifLine className='cursor-pointer text-xl' />
                                </div>
                                {
                                    <RiSendPlane2Fill
                                        className={`text-xl cursor-pointer ${
                                            isTextareaFocused
                                                ? 'text-indigo-600 pointer-events-auto'
                                                : 'pointer-events-none'
                                        }`}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongDetail;
