import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/aboutpg';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/projects';
import Gallery from './Components/Gallery/paintings';
import OnlineGallery from './Components/Online/onlineart';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<><NavBar></NavBar><Projects /></>} />
        <Route path="/about" element={<><NavBar></NavBar><About /></>} />
        <Route path="/gallery" element={<><NavBar></NavBar><Gallery /></>} />
        <Route path="/onlineart" element={<><NavBar></NavBar><OnlineGallery /></>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
