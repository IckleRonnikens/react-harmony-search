import React, { Component } from 'react'
import Stories from '../../data/stories.json'

class FanfictionProfile extends Component {

    render() {
            return (
<section class="fanfiction" id="allfanfiction">
  <div class="container">
    <h1>All Gamers</h1><hr />
            {Stories.stories.map(stories=>(
            <div class="row py-5" id={stories.ID}>

              <div class="col-sm-3" key={stories.id} >
                  <img class="w-100 " src={stories.image} alt={stories.title} />
              </div>
              <div class="col-sm-9">
                <h3>{stories.title}</h3>
                <h5> AKA {stories.name}
                </h5>
                <p> {stories.history}</p><br />
              </div>
            </div>
              ))}


  </div>
</section>
    




            )}
}

export default FanfictionProfile;