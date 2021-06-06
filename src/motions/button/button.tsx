import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Example } from "./Example";
import { Refresh } from "./refresh";
import "./style.css";

export const Button = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Example key={count} />
      </div>
    </>
  );
};

