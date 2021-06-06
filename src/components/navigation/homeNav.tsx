import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png"
import "./home.nav.css"
import { Menu } from "../..//motions/drawer/drawer"

export default class HomeNav extends Component<any> {


    render() {
        return (
            <Fragment> 
                <div className="homeNav">
                   <div className="left_links">
                       <Menu />
                   </div>

                   <div className="right_links">
                       <img src={logo} width="200px" alt="logo"/>

                   </div>
                </div>
            </Fragment>
        )
    }
}