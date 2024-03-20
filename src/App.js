import About from './pages/About';
import Home from './pages/Home';
import Room from './pages/Room';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import RoomDetails from './pages/RoomDetail';
import { Route, Routes } from 'react-router-dom';
import Upload from './pages/Upload';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="pt-10 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload />} />
          <Route path ="/room" element={<Room />}/>
          <Route path ="/roomdetail" element={<RoomDetails />}/>  
          <Route path="/profile" element={<Profile />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/AllPlaylists" element={<AllPlaylists />} />
          <Route path="/AllUploadSongs" element={<AllUploadSong />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
