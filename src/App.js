import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import WebApps from './components/WebApps';
import WebPages from './components/WebPages';
import Blog from './components/Blog';
import Meme from './components/Meme';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/webapps" element={<WebApps />} />
        <Route path="/webpages" element={<WebPages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/meme" element={<Meme />} />
      </Routes>
    </>
  )
};
export default App;