import { getVideos } from "../requests/video.requests"

/**
 * videos reducer, currently set to array, but it may require object with
 *  properties meta, links, data, currently only data is use.
 */

 const initialData = {
   meta:{},
   links:{},
   data:[]
 }
export const videos = {
  state:initialData,
  reducers:{
    setVideos(state, payload){
      return {...state, ...payload};
    },

    paginateVideos(state, payload){
      state['meta'] = {
        ...state['meta'],
        ...payload.meta 
      }      
      state['links'] = payload.links;
      state.data = [...state.data, ...payload.data]      
      console.log(state.data);
      return state;
    },

    filterData(state, payload){

    }
  },
  effects: (dispatch) => ({
    async getInitialData(payload, rootState){
      dispatch.loading.setLoading();
      const data = await getVideos({});
      dispatch.loading.resetLoading();
      const { page } = data;
      
      if(page.hasOwnProperty("content-items") && page['content-items']){
        if(page['content-items']['content']){
          const videos = page['content-items']['content'];
          const stateData = {
            meta:{
              title: page.title,
              total: page['total-content-items'],
              per_page: page['page-size-requested'],
              page: page['page-num-requested'],
              current_items: page['page-size-returned']
            },
            data: videos
          }
          dispatch.videos.setVideos(stateData)
        }
      }

    },
    /**
     * @todo 2 function use almost same codes, merge common content 
     * @param {*} payload 
     * @param {*} rootState 
     */
    async getPaginatedData(payload, rootState){
      console.log("I am calling data...")
      const { per_page, page, search } = payload;
      console.log(payload)
      console.log("Data to send....")
      dispatch.loading.setLoading();
      const data = await getVideos({per_page, page, search});
      dispatch.loading.resetLoading();
      const pageData = data.page;
      if(pageData.hasOwnProperty("content-items") && pageData['content-items']){
        if(pageData['content-items']['content']){
          const videos = pageData['content-items']['content'];
          const stateData = {
            meta:{
              title: pageData.title,
              total: pageData['total-content-items'],
              per_page: pageData['page-size-requested'],
              page: pageData['page-num-requested'],
              current_items: pageData['page-size-returned']
            },
            data: videos
          }
          console.log(page)
          console.log(stateData.meta);
          console.log("####")
          dispatch.videos.paginateVideos(stateData)
        }
      }
    }
  })
}