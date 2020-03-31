import React, { useState, useEffect } from "react";

export const Album = (({image_url, title, demo_image_url}) => {

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
        <picture>
          <img src={highRes ? image_url : demo_image_url} alt="" onLoad={handleOnLoad}/>
        </picture>
      </div>
      <div className={"album__title"}>

      </div>
    </div>
  )
});
