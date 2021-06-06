import React from 'react';
import './App.css';
import SearcField from "./components/forms/searchFields"
import HomeNav from "./components/navigation/homeNav"
import {Button } from "./motions/button/button";

function App() {
  return (
    <div className="App">
        <HomeNav />
      <header className="App-header">
        <SearcField />
      </header>

    </div>
  );
}

export default App;
