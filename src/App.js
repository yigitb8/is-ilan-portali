import React from 'react';
import './App.css';
import IlanList from './components/IlanList';

function App() {
  return (
    <div className="App">
      <h1>İş İlan Portalı</h1>

      <div className="header">
        
        <input type="text"
          placeholder="Arama yapın..."
        />

        <button id="arama_butonu">Ara</button>
      </div>

      <IlanList />

    </div>
  );
}

export default App;
