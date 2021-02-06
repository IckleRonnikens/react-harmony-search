import React, { Component } from "react";
import $ from "jquery";
import PhotoListItem from "./photoListItem";
import { HashLink as Link } from 'react-router-hash-link';


class Gallery extends Component {


  constructor(props) {
    super(props);

    this.state = {
      photoList: [],
      items: 0,
      searchTerm: "numbthumbz",
      loadingState: false,

    };
  }

  componentDidMount() {
    this.getPhotoList();
    }

    componentWillUnmount() {
      this.setState = (state,callback)=>{
        return;
      };
    }

  getPhotoList = () => {
    const flickrApiPoint =
      "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=" +
      this.state.searchTerm;

    try {
      $.ajax({
        url: flickrApiPoint,
        dataType: "jsonp",
        data: { format: "json" },
        success: function(data) {
          this.setState({ photoList: data.items });
        }.bind(this)
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  loadMoreItems = () => {
    if (this.state.loadingState) {
      return;
    }
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState(old => ({ items: old.items + 2, loadingState: false }));
    }, 1000);
    this.getPhotoList();
  };

  render() {
    return (
<section id="gallery" className="gallery-section">
  <div className="container">
  <h1><Link to="/gallery" className="text-white ">Gallery</Link></h1><hr />


        <div className="row pixgrid">

          {this.state.photoList
            .slice(-12, this.state.numberOfPhotos)
            .map((photo, index) => {
              const author = photo.author.split(/"/)[1];
              const authorLink = photo.description.split(/"/)[1];
              const description = photo.description.split(/"/)[13];
              return (
                <PhotoListItem
                  key={index}
                  url={photo.media.m}
                  photoLink={photo.link}
                  title={photo.title}
                  author={author}
                  authorLink={authorLink}
                  description={description}
                  tags={photo.tags}
                />
              );
            })}
        

        <React.Fragment>
          {this.state.loadingState ? (
            <p className="loading">{this.state.loadingMessage}</p>
          ) : (
            <p className="loading">{this.state.loadingMessage}</p>
          )}
        </React.Fragment>

        </div>
      </div>
</section>
    );
  }
}



export default Gallery;