import { getVideos } from "../requests/video.requests"

/**
 * videos reducer, currently set to array, but it may require object with
 *  properties meta, links, data, currently only data is use.
 */
export const videos = {
  state:{

  },
  reducers:{
    setVideos(state, payload){
      return payload;
    },

    paginateVideos(state, payload){
      state['meta'] = {
        ...state['meta'],
        ...payload.meta 
      }      
      state['links'] = payload.links;
      state.data = [...state.data, ...payload.data]      
      return state;
    },

    filterData(state, payload){

    }
  },
  effects: (dispatch) => ({
    async getInitialData(payload, rootState){
      const data = await getVideos();
      const { page } = data;
      if(page.hasOwnProperty("content-items") && page['content-items']){
        if(page['content-items']['content']){
          const videos = 
          dispatch.videos.setVideos()
        }
      }

    },
    /**
     * @todo 2 function use almost same codes, merge common content 
     * @param {*} payload 
     * @param {*} rootState 
     */
    async getPaginatedData(payload, rootState){
      const { per_page, page, search } = payload;
      const data = await getVideos({per_page, page, search});
      const { page } = data;
      if(page.hasOwnProperty("content-items") && page['content-items']){
        if(page['content-items']['content']){
          const videos = 
          dispatch.videos.setVideos()
        }
      }
    }
  })
}