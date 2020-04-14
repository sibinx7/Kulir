import {videos} from "./videos";

/**
 * @method 
 * @name loading 
 * @summary Loading reducer 
 * @description Show loading on the screenm this reducer change value before and after ajax call
 */
const loading = {
  state: false,
  reducers:{
    setLoading(state, payload){
      return true;
    },
    resetLoading(state, payload){
      return false;
    }
  }
}


const search = {
  state: '',
  reducers:{
    setSearch(state, payload){
      return payload;
    },
    resetSearch(state, payload){
      return ''
    }
  }
}


export default {
  loading,
  videos,
  search
}