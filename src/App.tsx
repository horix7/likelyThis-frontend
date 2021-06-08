import React from 'react';
import './App.css';
import { client } from "./client/apolloClient";
import { ApolloProvider } from '@apollo/client';
import  Home from "./containers/home";

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Home />
    </div>
    </ApolloProvider>

  );
}

export default App;
