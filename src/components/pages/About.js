import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';


class About extends Component {

    render() {
        return (
<section className="about" id="about">
<div className="container">
  <h1>About HMS Harmony</h1><hr />
  <div className="row">
    <div className="col-sm-8 my-3">

          <h2>HMS Harmony</h2><hr />
          <p>
            Welcome to HMS Harmony. This is a community dedicated to the greatest and one true Harry Potter ship there is – <b>Harmony</b>.
            You'll only find Harry / Hermione content here.
          </p>

            <p>
          This website is still in its infancy, finding its feet, and growing the abilities for the community.
          </p>

          <p>
          Hopefully there's more to show you soon.
          </p>
          
          <p>
          In the meantime, check out the links on this page to access other communities for this ship...
          </p>


    </div>
    <div className="col-sm-4 my-3">
      <h2>Social</h2><hr />

      <div className="row">
        <div className="col-3"><i className="fab fa-5x fa-twitter-square  zoom"></i></div>
        <div className="col-3"><i className="fab fa-5x fa-instagram-square  zoom"></i></div>
        <div className="col-3"><i className="fab fa-5x fa-youtube-square  zoom"></i></div>
        <div className="col-3"><i className="fab fa-5x fa-facebook-square  zoom"></i></div>
      </div>
        
      <div className="clearfix"></div><hr /><br />
      <h2>Latest Fanart</h2><hr />
      <div className="row " >

        <div className="col-4"><img src="https://live.staticflickr.com/65535/49744862371_d5527db3bc_o.jpg" alt="" className="w-100 zoom" /></div>
        <div className="col-4"><img src="https://live.staticflickr.com/65535/49723696551_a6a6b17970_o.jpg" alt="" className="w-100 zoom" /></div>
        <div className="col-4"><img src="https://live.staticflickr.com/65535/49792206317_1a88c83f74_o.jpg" alt="" className="w-100 zoom" /></div>

      </div>
    </div>
  </div>
</div>
</section>

        )
    }
}
export default About;  