require("dotenv").config();
const API_SERVER = process.env.REACT_APP_API_SERVER || 'http://localhost:8080';


console.log(process.env)
console.log("Server...")
const API_URLS = {
  VIDEOS: API_SERVER+'/videos',
  VIDEO: API_SERVER+'/video'
}

export default API_URLS;

