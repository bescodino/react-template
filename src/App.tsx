import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile user="asdasdadasd" />} />
      </Routes>
    </Router>
  );
}

export default App
