import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import VideoPlayer from './routes/VideoPlayer/VideoPlayer';
import Sidebar from './components/Sidebar/Sidebar';

export const SERVER = "http://192.168.100.62:3010"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
    </div>
  );
}

export default App;
