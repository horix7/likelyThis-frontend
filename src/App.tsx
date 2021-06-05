import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import SearcField from "./components/forms/searchFields"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} width="200px" style={{objectFit: "contain"}} className="App-logo" alt="logo" /> */}
        {/* <img src={logo} width="200px" style={{objectFit: "contain"}} alt="logo" /> */}
        <SearcField />
      </header>

      <p> Comming Soon </p>
    </div>
  );
}

export default App;
