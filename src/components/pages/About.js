import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


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
            Here at <u>Numbthumbz</u> gaming, we're all about video games. We love anticipating them, we love playing them and then we love talking about them.
            So much so, that we like to review video games that we have played and enjoyed. There's no discrimination, a wide variety of games will surely be covered 
            by the team assembled to produce to you this website.</p>

            <p>
            However, just so we're clear, if you're looking for an in-depth, over the top and thorough analysis of a video game you're looking to buy,
            then this may not be the place for you.
          </p>

          <p>
            We specialise in pocket size reviews only, because in the end, pulling apart a video game by listing all of its faults is a waste of everyone's time.
            We don't want to have a website full of game reviews that are essentially novels, sometimes taking longer to read than playing the game itself.
            We want to get in and cover the basics, give our brief thoughts and then get out, quick, so we can move on to our next adventure.
          </p>
          
          <p>
            So please feel free, to have a look around, and if by chance you like what you see, or have some constructive words to give to us, feel free to do 
            so via our <Link to="/feedback#feedback"><u>Feedback</u></Link> page, and thanks for coming.
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