import React from 'react';
import './App.css';
import SearcField from "./components/forms/searchFields"
import HomeNav from "./components/navigation/homeNav"

function App() {
  return (
    <div className="App">
        <HomeNav />
      <header className="App-header">
        <SearcField />
      </header>

      <p> Comming Soon </p>
    </div>
  );
}

export default App;
