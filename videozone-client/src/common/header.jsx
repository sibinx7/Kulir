/* Header consists of current genre and a search option */
import React, { Component } from "react";
import {  connect } from "react-redux";

import IconBack from "../assets/images/back.png";
import IconSearch from "../assets/images/search.png"

class Header extends Component{

  state = {
    showSearchForm: false,
    searchText:''
  }

  resetSearchForm = (e) => {
    e.preventDefault();
    this.setState({
      showSearchForm: false
    })
  }
  
  showSearchForm = (e) => {
    e.preventDefault();
    this.setState({
      showSearchForm: true
    });
  }

  handleSearchChange = (e) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    this.setState({
      searchText: (value)
    }, () => {
      const { setSearch } = this.props;
      const { searchText } = this.state;
      setSearch(searchText);
    })
  }
  render(){
    const { genre_title } = this.props;
    const { showSearchForm, searchText } = this.state;
    return( 
      <header className="grid grid-cols-12 gap-3 pt-3 pb-3 pl-2 pr-2 relative">
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
        <div className="col-span-2 text-right">
          <button className="" onClick={e => this.showSearchForm(e)}>
          <img src={IconSearch} alt="Search videos"/>
          </button>
        </div>
        {/* Show search bar */}
        {
          showSearchForm && (
            <div className="header__search absolute grid grid-cols-1 w-full">
          <form action="" className="w-full relative mr-6 my-2">
            <input type="text" placeholder="Search..."  value={searchText} 
            onChange={e => this.handleSearchChange(e)}
            className="w-full px-3 py-3"/>
            <div className="absolute search__reset">
              <button onClick={e => this.resetSearchForm(e)}>
                <svg id="Capa_1" enable-background="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm113.926 326.141-45.564 45.564-68.362-68.362-68.362 68.362-45.564-45.564 68.362-68.362-68.362-68.362 45.564-45.564 68.362 68.362 68.362-68.362 45.564 45.564-68.362 68.362s68.362 68.362 68.362 68.362z"/></svg>
              </button>
            </div>
          </form>
        </div>
          )
        }
        
        {/* end Show search bar */}
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

const mapDispatchToProps = ({videos, search:{ setSearch}}) => {
  return {
    setSearch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);