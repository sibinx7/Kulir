var express = require('express');
var router = express.Router();

/* GET users listing. */
// Routes
/**
 * @swagger 
 * /users:
 *  get:
 *    description: User page 
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
