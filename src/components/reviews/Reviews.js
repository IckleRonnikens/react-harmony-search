import React, { Component } from "react";
import axios from "axios";

import ReviewsPreview from "./ReviewsPreview";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
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

  render() {
    return (
<section className="reviews-section" id="reviews">
    <div className="container">
        <h1>Reviews</h1><hr />
        <div className="row">
        {this.state.posts.slice(0, 4).map(post => <ReviewsPreview post={post} />)}
        </div>
      </div>
</section>
    );
  }
}
