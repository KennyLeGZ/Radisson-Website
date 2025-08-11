import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Radisson from './Radisson';
import RadissonFr from './RadissonFr';
import RadissonGallery from './RadissonGallery';
import RadissonGalleryFr from './RadissonGalleryFr';


function App() {
  return (
    <Router>
      <Routes>
        {/* Load Radisson on root path "/" */}
        <Route path="/" element={<Radisson />} />
        <Route path="/fr" element={<RadissonFr />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<RadissonGallery />} />
        <Route path="/gallery/fr" element={<RadissonGalleryFr />} />
      </Routes>
    </Router>
  );
}

export default App;
