import React, { useState, useEffect, lazy } from "react";
import albumPlaceholderImage from "../../assets/images/placeholder_for_missing_posters.png";
import { Link } from "react-router-dom";

const ImageComponent = lazy(async () => await import("./image"));

const Album = (({video}) => {

  // const {image_url="", title="", demo_image_url=""} = video;
  let image_url = video['poster-image'];

  image_url = require(`../../assets/images/videos/${image_url}`);
  const name = video['name'];
  const demo_image_url = albumPlaceholderImage;  
  const [highRes, setHighRes] = useState(false)

  /* Image loaded */
  const handleOnLoad = ( ) => {
    setHighRes(true)
  }

  useEffect(() => {
    return () => {
      setHighRes(false);
    }
  });

  return (
    <div className={"album"}>
      <div className={"album__image"}>
        <ImageComponent image_url={image_url} title={name}/>
      </div>
      <div className={"album__title"}>
        <h3 className={`text-white`}>
          <Link to={``} classname={`text-white`}>
            {name}
          </Link>
        </h3>
      </div>
    </div>
  )
});


export default Album;