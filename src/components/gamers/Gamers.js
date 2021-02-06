import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'; 
import VideoGamers from '../../data/gamers.json'

class Gamers extends Component {

    render() {
            return (
            <section className="gamers-section" id="gamers">
                <div className="container">
                    <h1>Fanfiction</h1><hr />
                    <div className="row">

                {VideoGamers.gamers.map(gamers=>(
                    <div className="col-3" key={gamers.id} >                          
                        <p className="w-100">{gamers.title}</p>
                            <img className="featurette-image img-fluid img-responsive grid__item mx-auto " width="100%" height="100%" alt={gamers.title} src={gamers.image} />
                                
                            <br />
                <Link to={`/gamers/profiles`}  ><button className="btn btn-light rounded-0 btn-sm text-dark mt-2 w-100">{gamers.name}</button></Link>
                    </div>   ))}

                    </div>
                </div>
            </section>
    




            )}
}

export default Gamers;