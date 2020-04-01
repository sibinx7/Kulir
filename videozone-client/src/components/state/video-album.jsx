import React, { Component, lazy } from "react";
import classnames from "classnames";

const Album = lazy(async () => await import("../statless/album"))



class VideoAlbum extends Component{
  render(){
    const { className, video } = this.props;
    return(
      <React.Fragment>        
        <div className={`${className}`}>
          <Album video={video}/>
        </div>
      </React.Fragment>
    )
  }
}

export default VideoAlbum;