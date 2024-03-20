import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AllPlaylists from "./pages/AllPlaylists";
import AllUploadSong from "./pages/AllUploadSongs";

import { Route, Routes } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";

function App() {
  return (
    <div className="px-2 pt-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/AccountSettings" element={<AccountSettings />} />
        <Route path="/AllPlaylists" element={<AllPlaylists />} />
        <Route path="/AllUploadSongs" element={<AllUploadSong />} />
      </Routes>
    </div>
  );
}

export default App;
