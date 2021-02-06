import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class ReviewsPreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
    }
  }

  render() {

    if (this.props.post) {
      return (
          <div className="col-3">
          <h2 className="text-center">{this.props.post.title}</h2><hr />
          <a href={"/reviews/" + this.props.post.ID} className="blackLink">
            {this.props.post.featured_image ? (
              <img
                className="img-responsive webpic w-100"
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
          </a>
          <HashLink to={"/reviews/" + this.props.post.ID}>
            <button className="btn btn-dark rounded-0 btn-sm text-light mt-2 w-100">Read More</button>
          </HashLink>
          </div>
      );
    } else {
      return null;
    }
  }
}
