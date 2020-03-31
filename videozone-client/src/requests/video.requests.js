import { getRequest } from "../apis/http-verbs"
import API_URLS from "../apis/urls"

/**
 * Retrive all videos with pagination 
 */
export const getVideos = async ({per_page, page, search}) => {
  const queries = { per_page, page, search }
  const videosData = await getRequest(API_URLS.VIDEOS, query);
  return videosData;
}