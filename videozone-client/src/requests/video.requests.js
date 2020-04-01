import { getRequest } from "../apis/http-verbs"
import API_URLS from "../apis/urls"

/**
 * Retrive all videos with pagination 
 */
export const getVideos = async ({per_page=20, page=1, search=''}) => {
  const params = { per_page, page, search }    
  const videosData = await getRequest(API_URLS.VIDEOS, {params});

  return videosData;
}