import React, { Component } from "react";
import axios from "axios";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string;
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/numbthumbz.wordpress.com/posts/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({ post: res.data });
        const container = document.querySelector(".content");
        let scr = container.querySelectorAll("script");
        scr.forEach(node => {
          let parent = node.parentElement;
          let d = document.createElement("script");
          d.async = node.async;
          d.src = node.src;
          d.type = "text/javascript";
          parent.insertBefore(d, node);
          parent.removeChild(node);
          d.onload = console.log(d);
        });
      })
      .catch(error => console.log(error));
  }

  parseOutScripts(content) {}

  render() {
    if (this.state.post) {
      return (
        <section className="reviews-details p-5">
          <div className="container py-5">
          <h1 className="text-center text-dark">{this.state.post.title}</h1><hr />

            <div className="row">
            <div className="col-3">
            {this.state.post.featured_image ? (
              <img
                className="img-responsive webpic img-fluid w-100 my-3"
                alt="article header"
                src={this.state.post.featured_image}
              />
            ) : (
              ""
            )}
            </div>

            <div className="col-9">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: this.state.post.content }}
            />
            </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}
