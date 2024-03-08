import './App.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import About from './Components/About/aboutpg';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/projects';
import Gallery from './Components/Gallery/paintings';
import OnlineGallery from './Components/Online/onlineart';
import Mockups from './Components/Mockups/mockup';

const TRACKING_ID = "G-WBEZKLM3TV"; 
ReactGA.initialize(TRACKING_ID);

function PageTracker() {
  let location = useLocation();

  useEffect(() => {
    // Log page view with current path
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }, [location]);
}

function App() {
  return (
    <HashRouter>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<><NavBar /><Projects /></>} />
        <Route path="/about" element={<><NavBar /><About /></>} />
        <Route path="/gallery" element={<><NavBar /><Gallery /></>} />
        <Route path="/onlineart" element={<><NavBar /><OnlineGallery /></>} />
        <Route path="/mockups" element={<><NavBar /><Mockups /></>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
