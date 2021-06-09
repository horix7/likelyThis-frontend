import React, { Fragment, useState } from 'react';
import { Card } from "@material-ui/core";
import "./result.css"
import { motion } from "framer-motion";
import { IconContext  } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import { BsExclamation  } from "react-icons/bs";

export default function ResultCard(props: any) {
    const [state, setState] = useState({
        likely: false
    })
  return (
      <Fragment>
    <motion.div whileHover={{ scale: 1.2,   transition: { duration: 0.4 , repeat: 0}}} >  
    <div className="boxHolder">
     <div className="resultBox">
        <Card style={{border: "none"}}>
            <h1 className="result-text">your are {state.likely ?  <span className="likely">likely</span>  :  <span className="not-likely">not likely </span> }to transfer Introductory Discrete Mathematics </h1>
           
        </Card>
       {state.likely ?  <IconContext.Provider value={{ color: "green", className: "result-icon" }}>
                <motion.div animate={{ scale: 1.4, transition: { duration: 1.4}}} > 
                    <GiCheckMark />
                 </motion.div>
             </IconContext.Provider> :  <IconContext.Provider value={{ color: "red", className: "result-icon" }}>
                <motion.div animate={{ scale: 1.4, transition: { duration: 1.4}}} > 
                    <BsExclamation />
                 </motion.div>
             </IconContext.Provider>}
             </div>
        </div>
        </motion.div>

      </Fragment>

  );
}

