import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'; 
import axios from "axios";




class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      search:null
    };
  }
  componentDidMount() {
    axios
      .get(
        "./data/stories.json"
      )
      .then(res => {
        console.log(res.data.stories);
        this.setState({ stories: res.data.stories });
      })
      .catch(error => console.log(error));
  }
  
    searchSpace=(event)=>{
      let keyword = event.target.value;
      this.setState({search:keyword})
    }
  
    render(){
// eslint-disable-next-line
      const items = this.state.stories.filter((stories)=>{
        if(this.state.search == null)
            return stories
        else if(stories.title.toLowerCase().includes(this.state.search.toLowerCase()) || stories.title.toLowerCase().includes(this.state.search.toLowerCase())){
            return stories
        }
      }).map(stories=>{
        return(
        <div className="col-12">
          <div className="row">
          <div className="col-2">
          <img src={stories.featured_image} alt={stories.title} className="w-100" />
          </div>
          <div className="col-10" key={stories.ID}>
            <Link to={`/reviews/${stories.ID}`}  > <h2 >{stories.title} </h2></Link>
                {stories.excerpt}
                <p><Link to={`/reviews/${stories.ID}`}  > <button className="btn btn-dark rounded-0 btn-sm text-white">Read More...</button></Link></p>
          </div>
          </div>
                <hr />

        </div>

        )
      })
  
      return (
    <section className="search-section" id="search">
        <div className="container">
            <h1>Search Fanfiction</h1><hr />
            
            <div className="input-group">
                <input className="form-control form-block" type="text" placeholder="Search Fanfiction..."  onChange={(e)=>this.searchSpace(e)} />
            </div><hr />
            
            <div className="row">
                {items}
            </div>
        </div>
    </section>
      )
    }
  }
  
  export default Search;