import React, { Fragment, useEffect, useState } from 'react';
import '../App.css';
import HomeNav from "../components/navigation/homeNav"
import ResultCard from "../components/cards/resultCard"
import axios from 'axios'
import ResultNav from "../components/navigation/resultNav";



export default function resultPage(props: any) {

  return (
      <Fragment>
      <div style={{position: "relative"}}>
      <ResultNav />
      <ResultCard likely={props} />
      </div>
      </Fragment>

  );
}

