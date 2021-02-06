import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class AppHeader extends Component {
    render() {
        return (
            <header>
                <section id="home" className="header-section">
                    <div className="container">
                        <div className="overlay">
                            <div className="header-section-inner">
                                    <h1>HMS Harmony</h1>
            <h2>It's Canon Bitches!</h2><br />
                <Link to={process.env.PUBLIC_URL + "/#about"} size="sm" className="btn btn-light my-sm-0 rounded-0">Read More...</Link>             
    </div>
</div>

  
</div>
</section>
</header>
        )
    }
}

export default AppHeader;