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
                                    <h1>Numbthumbz Gaming</h1>
            <h2>Simple Game Reviews</h2><br />
                <Link to="/#about" size="sm" className="btn btn-light my-sm-0 rounded-0">Get Started</Link>             
    </div>
</div>

  
</div>
</section>
</header>
        )
    }
}

export default AppHeader;