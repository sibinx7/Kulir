var express = require('express');
var router = express.Router();

/* GET home page. */

/**
 * @swagger
 * paths: 
 *  /:
 *    get:
 *      description: Root page
 *      
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
   * @swagger
   * tags:
   *   - name: Login
   *     description: Login  
   */

  /**
   * @swagger
   * /login:
   *   post:
   *    summary: Login
   *    tags: [ Login ]
   *    requestBody:
   *      description: Login information 
   *      required: true
   *      content:
   *        application/x-www-form-urlencoded:
   *          schema:
   *            type: object
   *            properties:
   *              username:
   *                type: string 
   *              password:
   *                type: string     
   */
  router.post('/login', (req, res) => {
    res.json(req.body);
  });

module.exports = router;
