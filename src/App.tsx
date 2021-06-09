import React, { useState } from 'react';
import './App.css';
import { client } from "./client/apolloClient";
import { ApolloProvider } from '@apollo/client';
import  Home from "./containers/home";
import ResultPage from "./containers/results"

function App() {
  const [state, setState] = useState({
    results: false 
  })
  return (
    <ApolloProvider client={client}>
    <div className="App">
      {state.results ? <ResultPage updateGlobal={setState} /> : <Home updateGlobal={setState} />}
    </div>
    </ApolloProvider>

  );
}

export default App;
