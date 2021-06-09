import React, { Fragment } from 'react';
import '../App.css';
import HomeNav from "../components/navigation/homeNav"
import ResultCard from "../components/cards/resultCard"

export default function resultPage(props: any) {
  return (
      <Fragment>
      <HomeNav />
        <ResultCard />
      </Fragment>

  );
}

