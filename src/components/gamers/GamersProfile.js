import React, { Component } from 'react'
import VideoGamers from '../../data/gamers.json'

class GamersProfile extends Component {

    render() {
            return (
<section class="gamers" id="allgamers">
  <div class="container">
    <h1>All Gamers</h1><hr />
            {VideoGamers.gamers.map(gamers=>(
            <div class="row py-5" id={gamers.ID}>

              <div class="col-sm-3" key={gamers.id} >
                  <img class="w-100 " src={gamers.image} alt={gamers.title} />
              </div>
              <div class="col-sm-9">
                <h3>{gamers.title}</h3>
                <h5> AKA {gamers.name}
                </h5>
                <p> {gamers.history}</p><br />
              </div>
            </div>
              ))}


  </div>
</section>
    




            )}
}

export default GamersProfile;