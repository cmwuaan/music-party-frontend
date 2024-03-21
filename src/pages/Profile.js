import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PlaylistDefaultIMG from '../assets/images/PlaylistDefaultImg.png';
import { IoAddCircle } from 'react-icons/io5';

export default function Profile() {
  const handleAddPlaylist = () => {
    document.getElementById('my_modal_3').showModal();
  };

  const handleClickCloseButton = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
  };

  return (
    <div className="h-full w-full bg-black opacity-90">
      <Header />

      <div className="py-20 bg-black opacity-90">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          className=""
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div>
          <div className="relative bg-slate-400">
            <div className=" h-72 w-full bg-cover bg-center bg-gradient-to-b from-transparent to-[#181818]"></div>
            <div className="absolute top-1/2 left-[20%] -translate-x-1/2 transform -translate-y-1/2 items-center flex flex-row ">
              <div className="relative ">
                <img
                  src="https://img.freepik.com/premium-photo/cartoonish-3d-animation-boy-glasses-with-blue-hoodie-orange-shirt_899449-25777.jpg"
                  alt="avatar"
                  className='"h-40 w-40 rounded-full object-cover'
                />
                <button
                  className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 bg-slate-500 
                            hover:opacity-100 transition duration-300 ease-in-out px-6 py-1 rounded text-white flex flex-row gap-2"
                >
                  <i class="ri-camera-line"></i>
                  Update
                </button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  //ref={fileInputRef}
                />
              </div>
              <div className=" absolute  ml-56  w-96  py-2 text-white">
                <p>Profile</p>
                <p className="font-bold text-3xl">User Name</p>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto p-4 h-full">
            <div className="flex items-baseline mt-4 justify-between">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-white font-bold text-2xl ">Your playlist</p>
                <IoAddCircle className=" text-white text-2xl cursor-pointer" onClick={handleAddPlaylist} />
              </div>
              <Link to="/AllPlaylists" className="text-white font-semibold text-[12px] hover:underline cursor-pointer">
                Show All
              </Link>
            </div>
            <p className="text-gray-400 text-[12px] mt-2">Only visible for you</p>
            <div
              className="text-white mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                        2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 "
            >
              {/* Show playlist */}
              <div
                className={`bg-[#181818] w-full text-white flex flex-col gap-1 cursor-pointer hover:bg-gray-800 rounded-lg 
                          pb-4 pt-2 px-[10px] items-center 2xl:items-start text-center md:text-start`}
              >
                <div className="w-40 h-40 ">
                  <img src={PlaylistDefaultIMG} alt="PlaylistImg" className=" rounded w-40 h-40 object-cover" />
                </div>
                <p className="font-semibold text-base mt-2 truncate w-full">PlaylistName</p>
                <p className="text-xs text-gray-400 truncate w-full">playlistID</p>
              </div>
            </div>
            {/* Upload Song */}
            <div className="flex items-baseline mt-8 justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl ">Your upload songs</p>
                <p className="text-gray-400 text-[12px]">Only visible for you</p>
              </div>
              <Link
                to="/AllUploadSongs"
                className="text-white font-semibold text-[12px] hover:underline cursor-pointer"
              >
                Show All
              </Link>
            </div>
            <div
              className="text-white mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                        2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 "
            >
              {/* show Upload Song */}
              <div>
                <div
                  className="bg-[#181818] w-full text-white flex flex-col items-center gap-1 cursor-pointer
                   hover:bg-gray-800 rounded-lg pb-4 pt-2 px-[10px] 2xl:items-start text-center md:text-start "
                >
                  <div className="w-40 h-40 relative">
                    <img src={PlaylistDefaultIMG} alt="SongImage" className="rounded object-cover h-40 w-40" />
                  </div>
                  <Link>musicName</Link>
                  <p className="text-xs text-gray-400 truncate w-full">author</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <dialog id="my_modal_3" className="modal text-white">
          <div className="modal-box bg-[#1f2937]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost hover:bg-slate-600 absolute right-2 top-2"
                onClick={handleClickCloseButton}
              >
                ✕
              </button>
              <h3 className="font-bold text-xl text-center pt-2">Create new PlayList!</h3>
              <div className="flex flex-row gap-2 items-center ">
                <p className="py-4 font-semibold">Playlist Title</p>
                <span className="text-red-600">*</span>
              </div>
              <input
                type="text"
                // value={playlistName}
                // onChange={handleChangePlaylistName}
                className="w-full rounded py-[6px] bg-[#1f2937] border border-gray-400 px-4"
                required
              />
              <div className="flex flex-row gap-2 items-center ">
                <p className="py-4 font-semibold">Privacy</p>
                <span className="text-red-600">*</span>
              </div>
              <div className="flex flex-col gap-1 ">
                <div>
                  <input
                    type="radio"
                    name="visibility"
                    id="Public"
                    // checked={selectedPlaylistPrivacy === "Public"}
                    // onChange={handleRadioChange}
                    required
                  />
                  <label htmlFor="Public" className="cursor-pointer py-2 px-4 rounded text-sm text-gray-300 ">
                    Public
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="visibility"
                    id="Private"
                    // checked={selectedPlaylistPrivacy === "Private"}
                    // onChange={handleRadioChange}
                    required
                  />
                  <label htmlFor="Private" className="cursor-pointer py-2 px-4 rounded text-sm text-gray-300">
                    Private
                  </label>
                </div>
                <p className="ml-7 text-[10px] text-gray-400">
                  Only you and people share a secret link with will be able to listen to this track
                </p>
              </div>
              <button
                className="w-full py-2 bg-green-500 hover:scale-105 duration-300 rounded-xl mt-10 mb-2"
                // onClick={handlePlaylistOnclick}
              >
                Create
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
