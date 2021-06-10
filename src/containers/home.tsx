import React, { Fragment } from 'react';
import '../App.css';
import SearcField from "../components/forms/searchFields"
import HomeNav from "../components/navigation/homeNav"

export default function Home(props: any) {
  return (
      <Fragment>
      <HomeNav />
      <header className="App-header">
        <SearcField updateGlobal={{...props}} />
      </header>
      </Fragment>
  );
}

