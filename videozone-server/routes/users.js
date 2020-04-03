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

  


  router.get('/users', (req, res) => {
    res.json({
      username: 'jsmith',
    });
  });

  
  router.post('/users', (req, res) => {
    res.json(req.body);
  });

module.exports = router;
