var express = require('express');
var router = express.Router();

/* GET home page. */

/**
 * @swagger 
 * /:
 *  get:
 *    description: Root page
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
