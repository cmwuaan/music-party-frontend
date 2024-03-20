import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdArrowBack } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { FaTrashCan } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import SongsOfAlbum from '../components/SongsOfAlbum';

const listOfMusicData = [
    {
        imgUrl: 'https://images2.thanhnien.vn/thumb_w/576/528068263637045248/2024/3/4/dns0904-edit-1709560073519548111729.jpg',
        musicName: 'Nhạc của rừng',
        author: 'Đen Vâu',
        duration: 240, 
    },
    {
        imgUrl: 'https://i1.sndcdn.com/artworks-000173870809-q23kjk-t500x500.jpg',
        musicName: 'We dont talk anymore',
        author: 'charlie puth ',
        duration: 180,
    },
    {
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b27301807cbe5b0cea6f73eda25e',
        musicName: 'Chúng ta của tương lai',
        author: 'Sơn Tùng MTP',
        duration: 300,
    },
    {
        imgUrl: 'https://images2.thanhnien.vn/thumb_w/576/528068263637045248/2024/3/4/dns0904-edit-1709560073519548111729.jpg',
        musicName: 'Nhạc của rừng',
        author: 'Đen Vâu',
        duration: 240,
    },
    {
        imgUrl: 'https://i1.sndcdn.com/artworks-000173870809-q23kjk-t500x500.jpg',
        musicName: 'We dont talk anymore',
        author: 'charlie puth ',
        duration: 180,
    },
    {
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b27301807cbe5b0cea6f73eda25e',
        musicName: 'Chúng ta của tương lai',
        author: 'Sơn Tùng MTP',
        duration: 300,
    },
];
const AlbumDetail = () => {
    const fileInputRef = useRef(null);
    const [playlist, setPlaylist] = useState(null);

    const [playlistName, setPlaylistName] = useState('');
    const [selectedPlaylistPrivacy, setSelectedPlaylistPrivacy] = useState('');
    const [isEnableUpdatePlaylist, setIsEnableUpdatePlaylist] = useState(true);
    const navigate = useNavigate();
    const handleChangePlaylistName = (e) => {
        e.preventDefault();
        setPlaylistName(e.target.value);
    };

    const handleBackClick = () => {
        window.history.back();
    };
    const handleUpdateImageClick = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    };

    const handleDeleteUploadSong = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert all this album!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (playlist.avatarPlaylist)
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your album has been deleted.',
                        icon: 'success',
                    });
                navigate('/profile');
            }
        });
    };

    const handleImageChange = async (event) => {
        try {
            // setImage(event.target.files[0]);
            toast.success('Music image update successful!');
        } catch (e) {
            toast.error('Change image failed');
            console.log(e);
        }
    };
    const handleClickCloseButton = (e) => {
        e.preventDefault();
        handleCloseModal();
    };

    const handleRadioChange = (event) => {
        setSelectedPlaylistPrivacy(event.target.id);
    };
    const handleCloseModal = () => {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    };
    const handlePlaylistOnclick = async (e) => {
        e.preventDefault();
        try {
            if (isEnableUpdatePlaylist) {
                setIsEnableUpdatePlaylist(false);
                setIsEnableUpdatePlaylist(true);
                handleCloseModal();
                toast.success('Update music successfully');
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <div className='py-20 bg-black opacity-90 text-white w-full h-full'>
                <ToastContainer
                    position='bottom-right'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
                <div className='relative bg-[#9890A0] '>
                    <div className=' h-[22rem] bg-cover bg-center bg-gradient-to-b from-transparent to-[#181818]'></div>
                    <div className='absolute top-1/2 ml-24 transform -translate-y-1/2 items-center flex flex-row '>
                        <div className='relative flex flex-row gap-6 '>
                            <div className='mr-6 px-2 py-2 rounded-full'>
                                <IoMdArrowBack
                                    className='ri-arrow-left-s-line cursor-pointer text-4xl rounded-full bg-slate-800 hover:bg-slate-700 px-2 py-2'
                                    onClick={handleBackClick}
                                />
                            </div>
                            <div className='relative'>
                                <img
                                    src={
                                        'https://upload.wikimedia.org/wikipedia/en/2/21/Boygenius_-_the_record.jpg'
                                    }
                                    alt='AlbumImg'
                                    className='h-60 w-60 rounded shadow-2xl shadow-black object-cover '
                                />
                                <button
                                    className='absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 bg-slate-500 hover:opacity-100 transition duration-300 ease-in-out px-8 py-1 rounded-xl text-white flex flex-row gap-2 text-sm items-center'
                                    onClick={handleUpdateImageClick}
                                >
                                    <i className='ri-camera-line text-lg'></i>
                                    Update
                                </button>
                                <input
                                    type='file'
                                    onChange={handleImageChange}
                                    accept='image/*'
                                    style={{ display: 'none' }}
                                    ref={fileInputRef}
                                />
                            </div>
                            <div className='flex flex-col gap-6'>
                                <p className='text-lg font-semibold'>Album</p>
                                <p className='font-bold text-[80px]'>
                                    The Record
                                </p>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-lg font-semibold'>
                                        Boygenius
                                    </p>
                                    <div className='flex flex-row gap-96 items-center justify-between '>
                                        <div className='flex flex-row gap-1 items-center'>
                                            <FaMusic className='h-4 w-4 text-green-500' />
                                            <p className='text-xs'>
                                                <b>Music Party - 20 songs</b>
                                            </p>
                                        </div>
                                        <div className='btnEditDelete flex flex-row gap-2'>
                                            <button
                                                className='flex flex-row gap-2 items-center border px-3 py-[3px] border-gray-400 rounded hover:border-gray-300 '
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            'my_modal_3'
                                                        )
                                                        .showModal()
                                                }
                                            >
                                                <MdOutlineModeEditOutline />
                                                <p className='text-xs font-semibold '>
                                                    Edit
                                                </p>
                                            </button>
                                            <button
                                                className='flex flex-row gap-2 items-center border px-2 py-[3px] border-gray-400 rounded hover:border-gray-300 '
                                                onClick={handleDeleteUploadSong}
                                            >
                                                <FaTrashCan />
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
                <div className='flex flex-col space-y-1 pb-28 text-white bg-black mt-10'>
                    {listOfMusicData.map((music, i) => (
                        <SongsOfAlbum song={music} order={i} />
                    ))}
                </div>
                <dialog id='my_modal_3' className='modal text-white'>
                    <div className='modal-box bg-[#1f2937]'>
                        <form method='dialog'>
                            <button
                                className='btn btn-sm btn-circle btn-ghost hover:bg-slate-600 absolute right-2 top-2'
                                onClick={handleClickCloseButton}
                            >
                                ✕
                            </button>
                            <h3 className='font-bold text-xl text-center pt-2'>
                                Update PlayList!
                            </h3>
                            <div className='flex flex-row gap-2 items-center '>
                                <p className='py-4 font-semibold'>
                                    Playlist Title
                                </p>
                                <span className='text-red-600'>*</span>
                            </div>
                            <input
                                type='text'
                                value={playlistName}
                                onChange={handleChangePlaylistName}
                                className='w-full rounded py-[6px] bg-[#1f2937] border border-gray-400 px-4'
                                required
                            />
                            <div className='flex flex-row gap-2 items-center '>
                                <p className='py-4 font-semibold'>Privacy</p>
                                <span className='text-red-600'>*</span>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <div>
                                    <input
                                        type='radio'
                                        name='visibility'
                                        id='Public'
                                        checked={
                                            selectedPlaylistPrivacy === 'Public'
                                        }
                                        onChange={handleRadioChange}
                                    />
                                    <label
                                        htmlFor='Public'
                                        className='cursor-pointer py-2 px-4 rounded text-sm text-gray-300 '
                                    >
                                        Public
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        name='visibility'
                                        id='Private'
                                        checked={
                                            selectedPlaylistPrivacy ===
                                            'Private'
                                        }
                                        onChange={handleRadioChange}
                                    />
                                    <label
                                        htmlFor='Private'
                                        className='cursor-pointer py-2 px-4 rounded text-sm text-gray-300'
                                    >
                                        Private
                                    </label>
                                </div>
                                <p className='ml-7 text-[10px] text-gray-400'>
                                    Only you and people share a secret link with
                                    will be able to listen to this track
                                </p>
                            </div>
                            <button
                                className='w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-700 hover:scale-105 duration-300 rounded-xl mt-10 mb-2'
                                onClick={handlePlaylistOnclick}
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AlbumDetail;
