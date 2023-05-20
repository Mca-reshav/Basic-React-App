import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teams from './TeamsList';
import PlayersList from './PlayersList'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Teams/>} />
          <Route path='/p' element={<PlayersList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

