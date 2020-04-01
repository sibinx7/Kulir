/* Header consists of current genre and a search option */
import React, { Component } from "react";
import {  connect } from "react-redux";

import IconBack from "../assets/images/back.png";
import IconSearch from "../assets/images/search.png"

class Header extends Component{
  render(){

    const { genre_title } = this.props;

    return( 
      <header className="grid grid-cols-12 gap-3 pt-3 pb-3 pl-2 pr-2">
        <div className="col-span-10">
          <div>
            <div>              
              <h5 className="text-white">
                <a href="" className="inline mr-3">
                  <img src={IconBack} alt="Go back" className="inline"/>
                </a>
                <span className="inline">
                {genre_title}
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <form action="">

            <img src={IconSearch} alt="Search videos"/>
          </form>
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({videos}) => {
  let genre_title= {};
  try{
    console.log(videos);
    genre_title = videos['meta']['title']
  }catch(e){

  }

  return {
    genre_title
  }
}

const mapDispatchToProps = ({videos}) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);