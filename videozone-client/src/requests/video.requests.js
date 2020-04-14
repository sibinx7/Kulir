import { getRequest } from "../apis/http-verbs"
import API_URLS from "../apis/urls"

/**
 * @method 
 * @name getVideos
 * @summary Fetch videos
 * @description Fetch videos with per_page, page and search as query params 
 * @params per_page 
 * @params page 
 * @params search 
 * @returns Promise videos 
 * @example const videos = getVideos({ per_page, page, search }).then()
 * Retrive all videos with pagination 
 */
export const getVideos = async ({per_page=20, page=1, search=''}) => {
  const params = { per_page, page, search }    
  const videosData = await getRequest(API_URLS.VIDEOS, {params});

  return videosData;
}