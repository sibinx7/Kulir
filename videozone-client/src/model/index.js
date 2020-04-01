import {videos} from "./videos";


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