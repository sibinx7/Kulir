/* Header consists of current genre and a search option */
import React, { Component } from "react";
import IconBack from "../assets/images/back.png";
import IconSearch from "../assets/images/search.png"

class Header extends Component{
  render(){
    return(
      <header>
        <div className="gridd-col-10 sm:grid-col-11">
          <div>
            <div>
              <a href="">
                <img src={IconBack} alt="Go back"/>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-col-2 sm:grid-col-1">
          <form action="">

            <img src={IconSearch} alt="Search videos"/>
          </form>
        </div>
      </header>
    )
  }
}

export default Header;