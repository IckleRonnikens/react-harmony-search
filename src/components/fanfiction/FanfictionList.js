import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'; 
import Stories from '../../data/stories.json';

class FanfictionList extends Component {

    render() {
            return (
            <section className="fanfiction-section" id="fanfiction">
                <div className="container">
                    <h1>Fanfiction</h1><hr />
                    <div className="row">

                {Stories.stories.map(stories=>(
                    <div className="col-12" key={stories.id} >                          
                        <p className="w-100">{stories.title}</p>
                        <p className="w-100">{stories.summary}</p>
                                
                            <br />
                <Link to={`/stories/profiles`}  ><button className="btn btn-light rounded-0 btn-sm text-dark mt-2 w-100">{stories.title}</button></Link>
                    </div>   ))}

                    </div>
                </div>
            </section>
    




            )}
}

export default FanfictionList;