import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import IlanList from './components/IlanList';
import IlanDetay from './components/IlanDetay';

function App() {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <h1>İş İlan Portalı</h1>

        <div className="header">
          <input 
            type="text"
            placeholder="Arama yapın..."
            value={search}
            onChange={handleInputChange}
          />

          <button id="arama_butonu">Ara</button>
        </div>
        
        <Routes>
          <Route path="/" element={<IlanList searchTerm={search} />} />
          <Route path="/ilan/:id" element={<IlanDetay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
