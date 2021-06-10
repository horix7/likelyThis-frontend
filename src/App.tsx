import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from "./client/apolloClient";
import { ApolloProvider } from '@apollo/client';
import  Home from "./containers/home";
import ResultPage from "./containers/results"
import { createMuiTheme , ThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5CE1E6",
    },
    secondary: {
      main: '#ff9100',
    },
  },
})

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
      <ThemeProvider theme={theme}>
        <div className="App">
          {state.results ? <ResultPage state={state} updateGlobal={updateGlobal} /> : <Home updateGlobal={updateGlobal} />}
        </div>
      </ThemeProvider>
    </ApolloProvider>

  );
}

export default App;
