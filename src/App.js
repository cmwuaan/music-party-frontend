import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useAuth } from './utils/AuthContext';
import { useMusicContext } from './utils/MusicContext';
import api from './api/Api';
import { API_URL } from './api/Api';

import io from 'socket.io-client';

import About from './pages/About';
import Home from './pages/Home';
import Room from './pages/Room';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import RoomDetails from './pages/RoomDetail';
import Profile from './pages/Profile';
import AlbumDetail from './pages/AlbumDetail';
import AccountSettings from './pages/AccountSettings';
import AllPlaylists from './pages/AllPlaylists';
import AllUploadSong from './pages/AllUploadSongs';
import AllTopSong from './pages/AllTopSong';
import AllArtist from './pages/AllArtist';
import AllAlbum from './pages/AllAlbum';
import AllFavSong from './pages/AllFavSong';
import Search from './pages/Search';

import Upload from './pages/Upload';
import Header from './components/Header';
import ScrollBehavior from './components/ScrollBehavior';

function App() {
  const { authUser, setAuthUser, socket, setSocket } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isLoadFirst, setIsLoadFirst] = useState(true);
  const { isActive } = useMusicContext();
  const socketRef = useRef();
  useEffect(() => {
    const getUser = async () => {
      console.log('Hello');
      setIsLoadFirst(false);
      await api
        .get('/auth/success')
        .then((respone) => {
          if (respone.status === 200) return respone.data;
          return { user: null, isAuthentication: false };
        })
        .then(async (resObject) => {
          if (resObject.user !== null) {
            //newSocket.emit('join_music',"Hello");
            setAuthUser(resObject.user.user);
            localStorage.setItem('accessToken', resObject.user.accessToken);
          }
          setLoading(false);
          setIsLoadFirst(true);
        });
    };
    if (isLoadFirst) {
      if (!socketRef.current) {
        socketRef.current = io.connect(API_URL, {
          forceNew: true,
          origins: API_URL,
        });
        setSocket(socketRef.current);
      }
      getUser();
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);
  return loading ? (
    <div className="text-center w-screen h-screen py-60">
      <span className="loader h-20 w-20 "></span>
    </div>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={authUser === null ? <Signin /> : <Navigate to="/profile" />} />
        <Route path="/signup" element={authUser === null ? <Signup /> : <Navigate to="/profile" />} />
        <Route path="/rooms" element={authUser !== null ? <Room /> : <Navigate to="/signin" />} />
        <Route path="/upload" element={authUser !== null ? <Upload /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={authUser !== null ? <Profile /> : <Navigate to="/signin" />} />
        <Route path="/accountsettings" element={authUser !== null ? <AccountSettings /> : <Navigate to="/signin" />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/reportissues" element={<ReportIssues />} /> */}
        <Route path="/AllPlaylists" element={<AllPlaylists />} />
        <Route path="/AllTopSongs" element={<AllTopSong />} />
        <Route path="/AllArtist" element={<AllArtist />} />
        <Route path="/AllAlbum" element={<AllAlbum />} />
        <Route path="/AllFavSong" element={<AllFavSong />} />
        <Route path="/AllUploadSongs" element={<AllUploadSong />} />
        <Route path="/playlist-detail/:id" element={<AlbumDetail />} />
        {/* <Route
          path="/room-detail/:id"
          element={
            authUser ? (
              <RoomContextProvider>
                <RoomDetails />
              </RoomContextProvider>
            ) : (
              <Navigate to="/signin" />
            )
          }
        /> */}
        {/* <Route path="/song-detail/edit/:id" element={authUser ? <EditUploadSong /> : <Navigate to="/signin" />} />
        <Route path="/song-detail/:id" element={<SongDetail />} /> */}
        <Route path="/search" element={<Search />} exact />
      </Routes>
      <div>{isActive && <Player />}</div>
    </div>
  );
}

export default App;
