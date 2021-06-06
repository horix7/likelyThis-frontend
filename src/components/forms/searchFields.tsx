import React, {Component, Fragment } from 'react'
import "./search.css"
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo.png"


export default class SearchField extends Component<any> {

    render() {

        return (
            <Fragment>
                
                <div className="logoHolder">
                <img src={logo} width="200px" alt="logo"/>
                </div>
                <div className="searchBox" id="searchBox">
                    <input type="text"  className="searchInput"/>
                    <div className="searchAction">
                    <IconContext.Provider value={{ color: "white", className: "search-icon" }}>
                        <div>
                            <BsArrowRightShort />
                        </div>
                    </IconContext.Provider>

                    </div>
                </div>

            </Fragment>
        )
    }
}