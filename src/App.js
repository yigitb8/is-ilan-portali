import React, { useState } from 'react';
import './App.css';
import IlanList from './components/IlanList';

function App() {

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h1>İş İlan Portalı</h1>

      <div className="header">

        <input
          type="text"
          placeholder="Arama yapın..."
          value={search}
          onChange={handleChange}
        />

        <button id="arama_butonu">Ara</button>
      </div>

      <IlanList search={search} />
    
    </div>
  );
}

export default App;
