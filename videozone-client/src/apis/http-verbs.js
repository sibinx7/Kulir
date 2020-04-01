import axios from "./axios";

export const getRequest = async (url, config) => {  
  console.log(config);
  let response = await axios.get(url,config)
  let { data } = response;
  return data;
}

