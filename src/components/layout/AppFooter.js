import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class AppFooter extends Component {
    render() {
        return (
<footer id="footer" className="footer bg-dark mt-auto py-3">
  <div className="container">
  <p className="float-right text-white">
    <Link to="/#home">Return to the top</Link>
  </p>
    <span>&copy; 2020 - HMS Harmony</span>

  </div>
</footer>
        )
    }
}

export default AppFooter;