import React, { Fragment } from 'react';
import { Card } from "@material-ui/core";
import "./result.css"
import { motion } from "framer-motion";
import { IconContext  } from "react-icons";
import { SiVerizon } from "react-icons/si";

export default function ResultCard() {
  return (
      <Fragment>
    <motion.div animate={{ scale: 1.2,   transition: { duration: 1 , repeat: 0}}}> 
      <div className="resultBox">
        <Card style={{border: "none"}}>
            <h1 className="result-text">your are <span className="likely">likely</span> to transfer computer science II  </h1>
           
        </Card>
        <IconContext.Provider value={{ color: "green", className: "result-icon" }}>
                <motion.div whileHover={{ scale: 1.5, transition: { duration: 0.2}}} > 
                    <SiVerizon />
                 </motion.div>
             </IconContext.Provider>
        </div>
        </motion.div>

      </Fragment>

  );
}

