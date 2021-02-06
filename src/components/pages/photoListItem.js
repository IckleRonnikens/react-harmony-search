import React, { Component } from "react";



export default class PhotoListItem extends Component {
  render() {
    return (
        <div className="col-2 ">
          <img className="featurette-image img-fluid img-responsive grid__item mx-auto mb-5 zoom" width="100%" height="100%" alt="" src={this.props.url} />
        </div>
    );
  }
}