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

export default {
  loading,
  videos
}