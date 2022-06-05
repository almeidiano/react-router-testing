import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Profile from './pages/Profile.js';
import ErrorPage from './pages/ErrorPage.js';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}