const fs = require("fs");
const path = require("path");
/* @todo Convert to class, then use either class or static method, first install babel for express js then use ES6 */
/**
 * VideCtrl class 
 */

const VideoCtrl = {
  /**
  * @swagger
  * paths:
  *   /videos:
  *     get:
  *       description: Retrive list of videos
  *       tags: [Videos]
  *       parameters:     
  *         - $ref: '#/components/schemas/Videos/parameters/per_page'    
  *         - $ref: '#/components/schemas/Videos/parameters/page'    
  *         - in: query
  *           name: search
  *           required: false 
  *       responses:
  *         '200':
  *           description: OK  
  *         404:
  *           description: Requested page/data not found on server 
  *         '5XX':
  *             description: Unexpected server error   
  *             
  */  
  index: function(req, res, next){
    const queries = req.query;
    const perPage = queries.per_page || 20; // const { per_page, page, search } = queries;
    const page = queries.page || 1;
    const search = queries.search;
    
    const DATABASE_JSON_FILE_PATH = path.join(__dirname, "../database/static/video");
    const VIDEO_FILE_NAME = 'CONTENTLISTINGPAGE-PAGE';
    // requested_file = `${DATABASE_JSON_FILE_PATH}/${VIDEO_FILE_NAME}/${page}.json`;
    const requestedFile = path.join(DATABASE_JSON_FILE_PATH, (VIDEO_FILE_NAME+page+'.json'));
    // Check if file exists, else return empty data 
    let responseData = {}
    console.log(requestedFile)
    if(fs.existsSync(requestedFile)){
      try{
        const fileResponse = fs.readFileSync(requestedFile, 'utf8');
        const fileResponseJSON = JSON.parse(fileResponse);
        responseData = fileResponseJSON        
      }catch(e){      
        responseData = {          
          error: e,
          page:{} 
        }
      }            
    }else{
      responseData = {        
        page:{}
      }
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(responseData)
  },

  /**
   * @swagger 
   * paths:
   *  /videos/{id}:
   *    get:
   *       description: Get a Video by id
   *       tags: [ Videos ]
   *       parameters:
   *         - $ref: '#/components/schemas/VideoRoute/parameters/id'
   *  
   */
  show: (req, res, next) => {

  }
}

module.exports = VideoCtrl;