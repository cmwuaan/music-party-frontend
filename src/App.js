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
import { Route, Routes } from 'react-router-dom';
import Upload from './pages/Upload';
import Header from './components/Header';
import ScrollBehavior from './components/ScrollBehavior';

function App() {
  return (
    <>
      <Header />
      <ScrollBehavior />
      <div className="pt-10 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/room" element={<Room />} />
          <Route path="/room-detail" element={<RoomDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/album-detail" element={<AlbumDetail />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/all-playlists" element={<AllPlaylists />} />
          <Route path="/all-upload-songs" element={<AllUploadSong />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
