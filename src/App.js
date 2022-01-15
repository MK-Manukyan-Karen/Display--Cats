import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import CatsContainer from './components/CatsContainer/CatsContainer';
import ToBegin from './components/ToBegin/ToBegin';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ToBegin />} />
        <Route path='/cats' element={<CatsContainer />} />
      </Routes>
    </div>
  );
}

export default App;

