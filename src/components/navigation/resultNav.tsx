import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png"
import "./home.nav.css"

export default class HomeNav extends Component<any> {


    render() {
        return (
            <Fragment> 
                <div className="homeNav">
                   <div className="left_links">
                   <img src={logo} className="logo-img" alt="logo"/>
                   </div>

                   <div className="right_links">
                       <a href="/">home</a>
                   </div>
                </div>
            </Fragment>
        )
    }
}