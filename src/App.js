import About from './pages/About';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="px-2 pt-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
