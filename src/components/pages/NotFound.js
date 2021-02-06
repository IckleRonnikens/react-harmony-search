import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
<section className="not-found-section">
<div className="container">

<div className="overlay">
    <div className="not-found-section-inner">
        <h1>404 NOT FOUND</h1>
            <h2>The page you were looking for doesn't exist</h2><br />
                <Link to="/#home" size="sm" className="btn btn-light my-sm-0 rounded-0">Try Again</Link>             
    </div>
</div>

  
</div>
</section>
   


    )
}
