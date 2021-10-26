import React from 'react'
import Header from './Header.js'
import './App.css';
import Home from './Home.js';

function App() {
  return (
    //BEM
    <div className="app">
    <Header />
    <Home />
    </div>
  );
}

export default App;
