import Header from '../components/Header';
import SongCard from '../components/SongCard';
import { useState, useEffect } from 'react';
import Playlist from '../components/Playlist';
import { useMusicContext } from '../utils/MusicContext';
import { searchMusicByName } from '../api/MusicApi';
import { searchPlaylistByName } from '../api/PlaylistApi';
import NotFoundResult from '../components/NotFoundResult';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const [paddingYSong, setPaddingYSong] = useState('py-40');
  const [paddingYPlaylist, setPaddingYPlaylist] = useState('py-40');
  const [paddingYFooter, setPaddingYFooter] = useState('py-24');
  const [searchSongData, setSearchSongData] = useState([]);
  const [searchPlaylistData, setSearchPlaylistData] = useState([]);
  const [isLoadingSong, setIsLoadingSong] = useState(true);
  const [isLoadingPlaylist, setIsLoadingPlaylist] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    setPaddingYSong(searchSongData.length === 0 ? 'py-0' : 'py-40');
    setPaddingYPlaylist(searchPlaylistData.length === 0 ? 'py-0' : 'py-40');
    if (searchSongData.length === 0 && searchPlaylistData.length === 0) {
      setPaddingYFooter('py-0');
    } else if (searchSongData.length === 0 || searchPlaylistData.length === 0) {
      setPaddingYFooter('py-24');
    } else {
      setPaddingYFooter('py-0');
    }
  }, [searchSongData, searchPlaylistData]);

  const location = useLocation();
  const { music, setIsActive } = useMusicContext();
  useEffect(() => {
    if (music !== null && music !== undefined) setIsActive(true);
    else setIsActive(false);
  }, [music]);
  useEffect(() => {}, [searchInput]);
  useEffect(() => {
    // Lấy thông tin query params từ location.search
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search-input');
    const getMusic = async (query) => {
      try {
        const respone = await searchMusicByName(query);
        if (respone.status === 200) {
          setSearchSongData(respone.data.data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoadingSong(false);
      }
    };

    const getPlaylist = async (query) => {
      try {
        const respone = await searchPlaylistByName(query);
        if (respone.status === 200) {
          setSearchPlaylistData(respone.data.data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoadingPlaylist(false);
      }
    };
    // Reset loading states before making new requests

    // Perform both requests simultaneously
    console.log(searchInput);
    getMusic(query);
    getPlaylist(query);
    setSearchInput(query);
    setIsLoadingSong(true);
    setIsLoadingPlaylist(true);
  }, [location.search]);
  return (
    !isLoadingPlaylist &&
    !isLoadingSong && (
      <div>
        <Header itemSearch={searchInput} />
        {isLoadingPlaylist && isLoadingSong ? (
          <div className="text-center w-screen h-screen py-60">
            <span className="loader h-20 w-20 "></span>
          </div>
        ) : searchSongData.length === 0 && searchPlaylistData.length === 0 ? (
          <NotFoundResult searchInput={searchInput} />
        ) : (
          <div className="py-16 bg-black opacity-90 text-white w-full h-full">
            <div className="py-0 max-w-screen-xl  mx-auto px-4 ">
              {/* <p className='font-bold text-gray-400 text-3xl'>Search results for {searchInput}</p> */}
              <div className="flex items-baseline justify-between pt-12">
                <p className=" font-bold text-2xl mb-4 "> Songs</p>
              </div>
              {searchSongData.length === 0 ? (
                <div className={`${paddingYSong} max-w-screen-xl mx-auto px-0 text-left`}>
                  <p className="text-lg text-gray-400">
                    We couldn’t find any songs matching “{searchInput}”. Please try different keywords.
                  </p>{' '}
                </div>
              ) : (
                <div className="text-white mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 ">
                  {searchSongData.slice(0, 6).map((song, index) => (
                    <SongCard key={index} song={song} />
                  ))}
                </div>
              )}

              <div className="flex items-baseline justify-between pt-12">
                <p className=" font-bold text-2xl mb-4 "> Playlist/Album</p>
              </div>
              {searchPlaylistData.length === 0 ? (
                <div className={`${paddingYPlaylist} max-w-screen-xl mx-auto px-0 text-left`}>
                  <p className="text-lg text-gray-400">
                    We couldn’t find any playlists matching “{searchInput}”. Please try different keywords.
                  </p>{' '}
                </div>
              ) : (
                <div className="text-white mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 ">
                  {searchPlaylistData.slice(0, 6).map((playlist, index) => (
                    <Playlist key={index} playlist={playlist} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        <div className={`${paddingYFooter} bg-black`}>
          <Footer />
        </div>
      </div>
    )
  );
};

export default Search;
