import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class AppNavbar extends Component {
    render() {
        return (

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
          <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/#home"}>HMS Harmony</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to={process.env.PUBLIC_URL + "/#about"}>About </Link>
              </li>
              <li>
                <Link className="nav-link" to={process.env.PUBLIC_URL + "/#fanfiction"}>Fanfiction</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={process.env.PUBLIC_URL + "/#blog"}>Blog </Link>
              </li>
              <li>
                <Link className="nav-link" to={process.env.PUBLIC_URL + "/#fanart"}>Fanart</Link>
              </li>
        
            </ul>
            <span className="navbar-text">
              <Link to={process.env.PUBLIC_URL + "/search#search"}>Search</Link>
            </span>
          </div>
          </div>
        </nav>

        )
    }
}

export default AppNavbar;