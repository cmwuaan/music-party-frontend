import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="text-green-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
