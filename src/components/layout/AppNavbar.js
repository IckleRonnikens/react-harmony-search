import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class AppNavbar extends Component {
    render() {
        return (

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
          <Link className="navbar-brand" to="/#home">Numbthumbz</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/#about">About </Link>
              </li>
              <li>
                <Link className="nav-link" to="/#gamers">Gamers</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/#reviews">Reviews </Link>
              </li>
              <li>
                <Link className="nav-link" to="/#gallery">Gallery</Link>
              </li>
        
            </ul>
            <span className="navbar-text">
              <Link to="/search#search">Search</Link>
            </span>
          </div>
          </div>
        </nav>

        )
    }
}

export default AppNavbar;