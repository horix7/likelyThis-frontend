import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from "./client/apolloClient";
import { ApolloProvider } from '@apollo/client';
import  Home from "./containers/home";
import ResultPage from "./containers/results"

function App() {
  const [state, setState] = useState({
    results: false 
  })

  const updateGlobal = (newState:any) => {
    console.log("reached ")
    newState["results"] = true
    setState(newState)
    console.log(state)
  }

  useEffect(()=> {
    console.log(state)
  }, [state])
  return (
    <ApolloProvider client={client}>
    <div className="App">
      {state.results ? <ResultPage state={state} updateGlobal={updateGlobal} /> : <Home updateGlobal={updateGlobal} />}
    </div>
    </ApolloProvider>

  );
}

export default App;
