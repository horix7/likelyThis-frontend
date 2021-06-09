import React, { Fragment, useState } from 'react';
import { Card } from "@material-ui/core";
import "./result.css"
import { motion } from "framer-motion";
import { IconContext  } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import { BsExclamation  } from "react-icons/bs";

export default function ResultCard() {
    const [state, setState] = useState({
        likely: false
    })
  return (
      <Fragment>
    <motion.div animate={{ scale: 1.2,   transition: { duration: 1 , repeat: 0}}}> 
      <div className="resultBox">
        <Card style={{border: "none"}}>
            <h1 className="result-text">your are {state.likely ?  <span className="likely">likely</span>  :  <span className="not-likely">not likely </span> }to transfer computer science II  </h1>
           
        </Card>
       {state.likely ?  <IconContext.Provider value={{ color: "green", className: "result-icon" }}>
                <motion.div whileHover={{ scale: 1.5, transition: { duration: 0.2}}} > 
                    <GiCheckMark />
                 </motion.div>
             </IconContext.Provider> :  <IconContext.Provider value={{ color: "red", className: "result-icon" }}>
                <motion.div whileHover={{ scale: 1.5, transition: { duration: 0.2}}} > 
                    <BsExclamation />
                 </motion.div>
             </IconContext.Provider>}
        </div>
        </motion.div>

      </Fragment>

  );
}

