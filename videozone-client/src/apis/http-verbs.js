import axios from "./axios";
export const getRequest = async ({URL,queries}) => {
  let response = await axios.get(URL)
  let { data } = response.data;
  return data;
}

