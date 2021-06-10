import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = (object: any) => {
  const { i } = object
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <>
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.reload()}
      style={{backgroundColor: "wheat", cursor: "pointer", borderRadius: "10px", marginTop: "-10px", marginBottom:"5px",textAlign: "center", padding: "2px"}}
    >
      <p>home </p>
    </motion.div>
     <motion.div
     variants={variants}
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.95 }}
     onClick={() => window.location.reload()}
     style={{backgroundColor: "wheat", cursor: "pointer", borderRadius: "10px", textAlign: "center", padding: "2px"}}

   >
     <p>About Us </p>
   </motion.div>
   </>
  );
};
