var express = require('express');
var router = express.Router();

/* GET home page. */

/**
 * @swagger
 * paths: 
 *  /home:
 *    get:
 *      description: Root page
 *      requestBody:
 *        description: Login information 
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string 
 *                password:
 *                  type: string  
 *      
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
