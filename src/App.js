import Home from './pages/Home';
import Room from './pages/Room';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import RoomDetails from './pages/RoomDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="px-2 pt-6">
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path ="/room" element={<Room />}/>
        <Route path ="/roomdetail" element={<RoomDetails />}/>  
      </Routes>
    </div>
  );
}

export default App;
