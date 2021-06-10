import React, { Fragment, useEffect, useState } from 'react';
import '../App.css';
import HomeNav from "../components/navigation/homeNav"
import ResultCard from "../components/cards/resultCard"
import axios from 'axios'


export default function resultPage(props: any) {

  return (
      <Fragment>
      <HomeNav />
        <ResultCard likely={props} />
      </Fragment>

  );
}

