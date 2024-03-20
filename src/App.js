import About from './pages/About';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
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
        </Routes>
      </div>
    </>
  );
}

export default App;
