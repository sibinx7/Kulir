require("dotenv").config();
const API_SERVER = process.env.API_SERVER || 'http://localhost:8080';

const API_URLS = {
  VIDEOS: API_SERVER+'/videos',
  VIDEO: API_SERVER+'/video'
}

export default API_URLS;

