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

  /**
   * @swagger
   * definitions:
   *   Login:
   *     required:
   *       - username
   *       - password
   *     properties:
   *       username:
   *         type: string
   *       password:
   *         type: string
   *       path:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: User management and login
   */

  /**
   * @swagger
   * tags:
   *   - name: Login
   *     description: Login
   *   - name: Accounts
   *     description: Accounts
   */

  /**
   * @swagger
   * /login:
   *   post:
   *    summary: Login
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

  /**
   * @swagger
   * /users:
   *   get:
   *     description: Returns users
   *     tags:
   *      - Users
   *     produces:
   *      - application/json
   *     responses:
   *       200:
   *         description: users
   */
  router.get('/users', (req, res) => {
    res.json({
      username: 'jsmith',
    });
  });

  /**
   * @swagger
   * /users:
   *   post:
   *     description: Returns users
   *     tags: [Users]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/username'
   *     responses:
   *       200:
   *         description: users
   */
  router.post('/users', (req, res) => {
    res.json(req.body);
  });

module.exports = router;
