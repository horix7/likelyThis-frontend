import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png"
import "./home.nav.css"

export default class HomeNav extends Component<any> {


    render() {
        return (
            <Fragment> 
                <div className="homeNav">
                   <div className="left_links">
                       <img src={logo} width="200px" alt="logo"/>
                   </div>

                   <div className="right_links">
                        <a href="#">About</a>
                   </div>
                </div>
            </Fragment>
        )
    }
}