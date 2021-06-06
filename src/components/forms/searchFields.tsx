import React, {Component, Fragment } from 'react'
import "./search.css"
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo.png"
import { motion } from "framer-motion";
import { LinearProgress } from "@material-ui/core";


export default class SearchField extends Component<any> {

    state = {
        button: {
            scale: 0
        },

        text: null,
        suggestions: []
    }

    handleInputChange = (event: any ) => {
        const newState = {...this.state}
        newState.text = event.target.value 
        this.setState({...newState})

    }


    render() {

        return (
            <Fragment>
                <div className="logoHolder">
                <img src={logo} width="200px" alt="logo"/>
                </div>
                <motion.div  whileHover={{  scale: 1.05, transition: { duration: 0.5 }}}>
                <div className="searchBox" id="searchBox">
                    <input type="text" onChange={this.handleInputChange} className="searchInput"/>
                    <div className="searchAction">
                    <IconContext.Provider value={{ color: "white", className: "search-icon" }}>
                        <motion.div whileHover={{ rotate: 360, transition: { duration: 0.2}}} animate={{ scale: 1.5,   transition: { duration: 0.4 , repeat: 1}}}> 
                            <BsArrowRightShort />
                        </motion.div>
                    </IconContext.Provider>

                    </div>  
                    <div className="suggestions">
                   <>
                   { this.state.text ? <div className="suggest">
                            <p> {this.state.text} </p>
                        </div> : null } </>

                       {this.state.suggestions.length > 1 ? this.state.suggestions.map(() => (
                        <div className="suggest">
                            <p> {this.state.text} </p>
                        </div>
                       )): this.state.text ?  <LinearProgress style={{width: "80%", marginLeft: "10%"}} /> : null }
                    </div>
                </div>
                </motion.div>
            </Fragment>
        )
    }
}
