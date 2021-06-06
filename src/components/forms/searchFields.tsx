import React, {Component, Fragment } from 'react'
import "./search.css"
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";

export default class SearchField extends Component<any> {

    render() {

        return (
            <Fragment>
                <div className="searchBox" id="searchBox">
                    <input type="text"  className="searchInput"/>
                    <div className="searchAction">
                    <IconContext.Provider value={{ color: "#FF914D", className: "search-icon" }}>
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