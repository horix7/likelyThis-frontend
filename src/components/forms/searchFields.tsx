import React, {useState, Fragment, useEffect } from 'react'
import "./search.css"
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo.png"
import { motion } from "framer-motion";
import { LinearProgress } from "@material-ui/core";
import { BsArrowReturnRight } from "react-icons/bs";
import { HiOutlineLightBulb  } from "react-icons/hi";
import { gql, useQuery } from '@apollo/client';
import axios from 'axios';


export default function SearchField () {

   const [state, setState] = useState({
       text: "",
       suggestions: []
   })
    const handleInputChange = async (event: any ) => {
        const newState = {...state}
        newState.text = event.target.value 
        setState({...newState})
        
    }

    const searchCourse = async (graphQuery: string) => {
        console.log("arrived ")
        const results = await axios.post(
            "http://localhost:1337/graphql", {
                query: graphQuery
            }
        )

        console.log(results)
    }
    useEffect(() => {
        const Suggestion = `
        query getCourses{
            courses(where: { _q: \"${state.text}\" }) {
            title
            }
        }
        `
        console.log(Suggestion)
        searchCourse(Suggestion)
    }, [state])
        return (
            <Fragment>
                <div className="logoHolder">
                <img src={logo} width="200px" alt="logo"/>
                </div>
                <motion.div  whileHover={{  scale: 1.01, transition: { duration: 0.5 }}}>
                <div className="searchBox" id="searchBox">
                    <input type="text" onChange={handleInputChange} className="searchInput"/>
                    <div className="searchAction">
                    <IconContext.Provider value={{ color: "white", className: "search-icon" }}>
                        <motion.div whileHover={{ rotate: 360, transition: { duration: 0.2}}} animate={{ scale: 1.5,   transition: { duration: 0.4 , repeat: 1}}}> 
                            <BsArrowRightShort />
                        </motion.div>
                    </IconContext.Provider>

                    </div>  
                    <div className="suggestions">
                   <>
                   { state.text && state.text.split("").length ? <div className="suggest">
                            <div className="twoGridsEnds">
                           <IconContext.Provider value={{ color: "grey", className: "suggest-icon" }}>
                                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2}}} > 
                                <BsArrowReturnRight /> &nbsp; {state.text}  
                                </motion.div>
                            </IconContext.Provider>
                            </div>
                        </div> : null } </>

                       {state.suggestions.length >= 1 ? <> 
                        <div className="suggest-mid">
                        <IconContext.Provider value={{ color: "grey", className: "suggest-icon" }}>
                                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2}}} > 
                                <HiOutlineLightBulb /> &nbsp; {"did you mean "}
                                </motion.div>
                            </IconContext.Provider>
                            </div>
                       {state.suggestions.map(() => (
                        <div className="suggest">
                         <motion.div whileHover={{ scale: 0.97, transition: { duration: 0.2}}} whileTap={{ scale: 0.97, transition: { duration: 0.2}}} > 
                            <p> {state.text} </p>
                            </motion.div>
                        </div>
                       )) } </> : state.text && state.text.split("").length ?  <LinearProgress  style={{width: "80%", marginLeft: "10%", backgroundColor: "white", color: "red"}} /> : null }
                    </div>
                </div>
                </motion.div>
            </Fragment>
        )
}
