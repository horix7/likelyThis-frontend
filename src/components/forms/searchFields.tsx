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

   const [search, setSearch] = useState("")
    const handleInputChange = async (event: any ) => {


    const searchCourse = async (graphQuery: string) => {
        const results = await axios.post(
            "http://localhost:1337/graphql", {
                query: graphQuery
            }
        )

        let newState = {...state}

        const courses = !results.data.data.courses ? [] : results.data.data.courses
        newState.suggestions = courses

        setState(newState)
    }
    const newState = {...state}
    newState.text = event.target.value 
    setState({...newState})
    setSearch(event.target.value)
    if(event.target.value.length < 1) {
        state.suggestions = []
    }else  {
    const Suggestion = `
    query getCourses{
        courses(where: { _q: \"${event.target.value}\" }) {
        title
        }
    }
    `
    searchCourse(Suggestion)
}
}

const scaleUp = { scale: 1.08, transition: { duration: 0.2}}
const scaleDown = { scale: 0.97, transition: { duration: 0.2}}
   
        return (
            <Fragment>
                <div className="logoHolder">
                <motion.div transition={{  type: "spring",  stiffness: 700, damping: 30}}>
                <img src={logo} width="200px" alt="logo"/>
                </motion.div>
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
                   { search && search.length >= 1  ? <div className="suggest">
                            <div className="twoGridsEnds">
                           <IconContext.Provider value={{ color: "grey", className: "suggest-icon" }}>
                                <motion.div whileHover={scaleUp} > 
                                <BsArrowReturnRight /> &nbsp; {search}  
                                </motion.div>
                            </IconContext.Provider>
                            </div>
                        </div> : null } </>

                       {state.suggestions.length >= 1 ? <> 
                        <div className="suggest-mid">
                        <IconContext.Provider value={{ color: "grey", className: "suggest-icon" }}>
                                <motion.div whileHover={scaleDown} > 
                                <HiOutlineLightBulb /> &nbsp; {"did you mean "}
                                </motion.div>
                            </IconContext.Provider>
                            </div>
                       {state.suggestions.map((element: any) => (
                        <div className="suggest">
                         <motion.div whileHover={scaleUp} whileTap={{ scale: 0.97, transition: { duration: 0.2}}} > 
                            <p> {element.title} </p>
                            </motion.div>
                        </div>
                       )) } </> : state.text && state.text.split("").length ?  <LinearProgress  style={{width: "80%", marginLeft: "10%", backgroundColor: "white", color: "red"}} /> : null }
                    </div>
                </div>
                </motion.div>
            </Fragment>
        )
}
