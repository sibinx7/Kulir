import React, { Component, Suspense, lazy } from "react";
import {  connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import {  Scrollbars } from "react-custom-scrollbars";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import {  LoaderSVG } from "../components/statless/loader"

const VideoAlbum = lazy(async () => await import('../components/state/video-album'))



class VideoIndex extends Component{
  state = {
    loadingStatus: false,
    currentPage:1,
    scrollAutoHeight: false
  }
  // parentRef = React.createRef();
  componentDidMount(){
    const { getInitialData } = this.props;
    getInitialData();        
  }


  // static getDerivedStateFromProps(props, state){
  //   try{
  //     console.log("Video data updated ....")
  //     console.log(props)
  //     console.log(props.videos.data.length)
  //   }catch(e){
      
  //   }
  //   return null;
  // }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  /**
   * Page to request 
   */
  handleLoadMore = (page) => {
    console.log(page);
    page = page - 2;
    const { currentPage } = this.state;
    if(currentPage !== page){
      console.log("New page", page, currentPage)
      console.log("I am loading and finding new page")
      this.setState({scrollAutoHeight: true}, () => {
        const { getPaginatedData, loading } = this.props;
      if(!loading){ // Fetch data when loading is zero 
        setTimeout(() => {
          this.setState({currentPage:page, scrollAutoHeight: false})
          getPaginatedData({page});
        }, 2000) 
        
      }
      })
      
    }
    
    
  }

  parentRefCheck = (scrollbar) => {
    console.log("Inside parent check ref")
    try{
      if(scrollbar.view){
        this.parentRef = scrollbar.view;
      }
    }catch(e){

    }
  }


  scrolbarScroll = () => {
    console.log("On scrolling...")
  }

  /* Scroll finished */
  scrollbarScrollStop = () => {    
    const scrollValues = this.scrollRef.getValues();    
    console.log(this.scrollRef.getValues())
    console.log('Scroll happened...')
    const { scrollTop, clientHeight, scrollHeight} = scrollValues;
    const totalScrolledVertical = scrollTop + clientHeight;
    const requiredScrolledVertical = 50;
    if((scrollHeight - totalScrolledVertical) <= 50){ // It reached almost bottom with a threshold 50
      try{
        const { currentPage } = this.state;
        const { videos:{meta, data, links}, loading, getPaginatedData } = this.props;
        if(!(meta.total > data.length) ){
          return true;
        }
        if(meta.page !== currentPage){
          if(!loading){
            const page = currentPage + 1;
            this.setState({loadingStatus: true}, () => {
              getPaginatedData({page}); 
              /*
              * This is not a good solution, since we don't know when reducer update,
              * better move to getDerivedStateFromProps, or not use, once this section
              * work well, this loading state is not required  
              */
              this.setState({loadingStatus: false, currentPage: page});
            })
            
          }          
        }
      }catch(e){

      }
      
    }    
  }
  render() {
    const { loading, videos, search } = this.props;
    let videoData = [];
    if(videos.data){
      videoData = videos.data;
    }
    const { scrollAutoHeight, currentPage } = this.state;  
    let hasMoreItems = false;
    try{
      const { meta, data } = videos;
      hasMoreItems = meta.total > data.length      
    }catch(e){

    }
    if(!!search){
      videoData = videoData.filter((item, index) => {
        try{
          return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ; // includes can be use
        }catch(e){
          return true;
        }
      })
    }

    return (
      <React.Fragment>
        <div className="page__content">
        {
          (
            <Suspense fallback={<div>Working...</div>}>
              <div>                          
              <Scrollbars 
                  autoHeight={scrollAutoHeight}
                  onScroll={this.scrollbarScroll}
                  onScrollStop={this.scrollbarScrollStop}
                  style={
                    {
                      height: `calc(100vh - 80px)`
                    }
                  }      
                  ref={ (ref) => this.scrollRef = ref }            
                >
                  <div className="infinit__scroll__wrapper">
                    <div className="infinit__scroll__inner">
             {/* <InfiniteScroll
                pageStart={0}
                loadMore={this.handleLoadMore}
                hasMore={hasMoreItems}
                useWindow={false}
                getScrollParent={ () => {                  
                  return this.parentRef
                } }
              > */}
              <div className="galler__container">
              <div className="grid grid-cols-3 gap-7">
                <div className="pre-style-content  col-span-3 h-4">

                </div>
                
                  <LazyLoadComponent>
                    {
                      videoData.map((video, index) => {
                        const keyIndex = `${index}-${video.id || '#'}`
                        return(
                          <LazyLoadComponent key={keyIndex}>
                            <VideoAlbum video={video} key={keyIndex}/>                  
                          </LazyLoadComponent>
                        )
                      })
                    }
                  </LazyLoadComponent>
                
              <div className="post-style-content col-span-3 h-4">

              </div>
              </div>
              </div>                       
              {/* </InfiniteScroll>       */}
              </div>
              </div>
              </Scrollbars>
              </div>
            </Suspense>
          )
        }
        {
          loading && <div className="px-2 py-3 loading-container absolute">
            <LoaderSVG className={`svg-loder`} classNameSVG={`svg-loader-icon text-white fill-white`}/>
          </div>
        }
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = ({videos, loading, search}) => {
  return {
    videos,
    loading,
    search 
  }
}

const mapDispatchToProps = ({videos:{ getInitialData, getPaginatedData }}) => {
  return {
    getInitialData,
    getPaginatedData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);