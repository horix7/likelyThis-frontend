import React from 'react';
import './App.css';
import SearcField from "./components/forms/searchFields"
import HomeNav from "./components/navigation/homeNav"
import { client } from "./client/apolloClient";
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
        <HomeNav />
      <header className="App-header">
        <SearcField />
      </header>

    </div>
    </ApolloProvider>

  );
}

export default App;
