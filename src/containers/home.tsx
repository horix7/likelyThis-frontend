import React, { Fragment } from 'react';
import SearcField from "../components/forms/searchFields"
import HomeNav from "../components/navigation/homeNav"
import { motion } from "framer-motion";

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

