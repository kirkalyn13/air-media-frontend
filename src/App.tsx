import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import VideoPlayer from './routes/VideoPlayer/VideoPlayer';
import MusicPlayer from './routes/MusicPlayer/MusicPlayer';
import Home from './routes/Home/Home';

export const SERVER = "http://192.168.100.62:3010"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/music" element={<MusicPlayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
