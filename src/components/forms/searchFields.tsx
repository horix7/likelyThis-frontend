import React, {Component, Fragment } from 'react'
import "./search.css"
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo.png"
import { motion } from "framer-motion";



export default class SearchField extends Component<any> {

    state = {
        button: {
            scale: 0,

        },
    }

    render() {

        return (
            <Fragment>
                
                <div className="logoHolder">
                <img src={logo} width="200px" alt="logo"/>
                </div>
                <motion.div  whileHover={{
                              scale: 1.03,
                              transition: { duration: 1 },
                            }}>
                <div className="searchBox" id="searchBox">
                    <input type="text"  className="searchInput"/>
                    <div className="searchAction">
                    <IconContext.Provider value={{ color: "white", className: "search-icon" }}>
                        <motion.div whileHover={{ rotate: 360, transition: { duration: 0.2}}} animate={{ scale: 1.5,   transition: { duration: 0.4 , repeat: 1}}}> 
                            <BsArrowRightShort />
                        </motion.div>
                    </IconContext.Provider>

                    </div>
                </div>
                </motion.div>
            </Fragment>
        )
    }
}