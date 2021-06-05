import React, {Component, Fragment } from 'react'
import "./search.css"
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";

export default class SearchField extends Component<any> {

    render() {

        return (
            <Fragment>
                <div className="searchBox">
                    <input type="text" className="searchInput"/>
                    <div className="searchAction">
                    <IconContext.Provider value={{ color: "#5CE1E6", className: "search-icon" }}>
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