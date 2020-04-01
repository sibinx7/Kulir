import React, { Component } from "react";

const ImageComponent = (({image_url, title}) => {
  return (
    <picture>
      <img src={image_url} alt={title} className={`w-full `}/>
    </picture>
  )
});

export default ImageComponent;