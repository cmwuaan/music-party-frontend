import Header from "../components/Header";
import PlaylistDefaultIMG from "../assets/images/PlaylistDefaultImg.png";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function AllPlaylists() {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div>
      <Header />
      <div className="py-20 bg-black opacity-90 text-white ">
        <div className="max-w-screen-xl mx-auto py-20 h-full">
          {/* Button back */}
          <div
            className="cursor-pointer text-2xl rounded-full bg-slate-800 hover:bg-slate-600 px-2 py-2 items-center inline-flex"
            onClick={handleBackClick}
          >
            <IoMdArrowRoundBack className=" text-2xl" />
          </div>

          <p className="text-white font-bold text-2xl my-8">
            All Recent Playlists
          </p>
          <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6">
            {/* {listPlaylist.map((playlist, index) => (
              <Playlist key={index} playlist={playlist} />
            ))} */}
            <div
              className={`bg-[#181818] w-full text-white flex flex-col gap-1 cursor-pointer hover:bg-gray-800 rounded-lg 
                          pb-4 pt-2 px-[10px] items-center 2xl:items-start text-center md:text-start`}
            >
              <div className="w-40 h-40 ">
                <img
                  src={PlaylistDefaultIMG}
                  alt="PlaylistImg"
                  className=" rounded w-40 h-40 object-cover"
                />
              </div>
              <p className="font-semibold text-base mt-2 truncate w-full">
                PlaylistName
              </p>
              <p className="text-xs text-gray-400 truncate w-full">
                playlistID
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
