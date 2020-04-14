import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import VideoIndex from "../pages/index";
import VideoShow from "../pages/video"


const MainRouteList = [{
  path: "/",
  component: VideoIndex,
  id: 1,
},{
  path: '/video/:id',
  component: VideoShow,
  id: 2
}
]

/**
 * @name MainRoute 
 * @summary Route component 
 */
const MainRoutes = () => {
  return (
    <Router>
      <Switch>
        {
          MainRouteList.reverse().map((item, index) => {
            return <Route {...item} key={item.id}/>
          })
        }
      </Switch>
    </Router>
  )
}

export default MainRoutes;