import React, { Component, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const ImageComponent = (({image_url, title}) => {
  

  const showFullWidth = () => {
    console.log('Current image ')
      
  }

  return (
    <LazyLoadImage src={image_url}
      delayTime={30}
      className={'w-full'}
      afterLoad={ ()  => showFullWidth() }
      effect={'blur'}
      wrapperClassName={'w-full'}
      alt={title}>
      {/* <img src={image_url} alt={title} className={`w-full `}/> */}
    </LazyLoadImage>
  )
});

export default ImageComponent;