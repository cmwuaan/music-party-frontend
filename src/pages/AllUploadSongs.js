import Header from "../components/Header";
import PlaylistDefaultIMG from "../assets/images/PlaylistDefaultImg.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function AllUploadSongs() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div>
      <Header />
      <div className="py-20 bg-black opacity-90 text-white ">
        <div className="max-w-screen-xl mx-auto py-16 h-full">
          <div
            className="cursor-pointer text-2xl rounded-full bg-slate-800 hover:bg-slate-600 px-2 py-2 items-center inline-flex"
            onClick={handleBackClick}
          >
            <IoMdArrowRoundBack className=" text-2xl" />
          </div>
          <p className="text-white font-bold text-2xl my-16">
            All Upload Songs
          </p>
          <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6">
            {/* {uploadSongs.map((song, index) => (
              <SongCard key={index} song={song} listOfSong={uploadSongs} />
            ))} */}
            <div>
              <div
                className="bg-[#181818] w-full text-white flex flex-col items-center gap-1 cursor-pointer
                   hover:bg-gray-800 rounded-lg pb-4 pt-2 px-[10px] 2xl:items-start text-center md:text-start "
              >
                <div className="w-40 h-40 relative">
                  <img
                    src={PlaylistDefaultIMG}
                    alt="SongImage"
                    className="rounded object-cover h-40 w-40"
                  />
                </div>
                <Link>musicName</Link>
                <p className="text-xs text-gray-400 truncate w-full">author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
