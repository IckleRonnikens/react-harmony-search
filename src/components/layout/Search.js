import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'; 
import axios from "axios";




class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search:null
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/numbthumbz.wordpress.com/posts"
      )
      .then(res => {
        console.log(res.data.posts);
        this.setState({ posts: res.data.posts });
      })
      .catch(error => console.log(error));
  }
  
    searchSpace=(event)=>{
      let keyword = event.target.value;
      this.setState({search:keyword})
    }
  
    render(){
// eslint-disable-next-line
      const items = this.state.posts.filter((posts)=>{
        if(this.state.search == null)
            return posts
        else if(posts.title.toLowerCase().includes(this.state.search.toLowerCase()) || posts.title.toLowerCase().includes(this.state.search.toLowerCase())){
            return posts
        }
      }).map(posts=>{
        return(
        <div className="col-12">
          <div className="row">
          <div className="col-2">
          <img src={posts.featured_image} alt={posts.title} className="w-100" />
          </div>
          <div className="col-10" key={posts.ID}>
            <Link to={`/reviews/${posts.ID}`}  > <h2 >{posts.title} </h2></Link>
                {posts.excerpt}
                <p><Link to={`/reviews/${posts.ID}`}  > <button className="btn btn-dark rounded-0 btn-sm text-white">Read More...</button></Link></p>
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